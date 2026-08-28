# --- Stage 1: Build ---

FROM node:20-alpine AS builder

WORKDIR /app

# Build tools needed to compile native modules (e.g. argon2) on musl/Alpine
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY . .
RUN npm run build

# --- Stage 2: Production runtime ---

FROM node:20-alpine AS production

WORKDIR /app

# Same build tools needed here too — this stage does its own separate npm ci
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY prisma ./prisma
COPY prisma.config.ts ./prisma.config.ts

EXPOSE 3000

CMD ["node", "dist/main.js"]

