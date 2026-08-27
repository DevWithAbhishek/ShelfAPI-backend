sh-5.2$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
docker: open /home/ec2-user/.env: permission denied.
See 'docker run --help'.
sh-5.2$ aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
WARNING! Your password will be stored unencrypted in /home/ssm-user/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
sh-5.2$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
docker: open /home/ec2-user/.env: permission denied.
See 'docker run --help'.
sh-5.2$ sudo su - ec2-user
Last login: Mon Aug 24 13:00:23 UTC 2026 on pts/3
[ec2-user@ip-10-0-1-95 ~]$ aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
WARNING! Your password will be stored unencrypted in /home/ec2-user/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
Unable to find image '311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609' locally
docker: Error response from daemon: manifest for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609 not found: manifest unknown: Requested image not found.
See 'docker run --help'.
[ec2-user@ip-10-0-1-95 ~]$ aws ecr describe-images --repository-name shelfapi-backend --region ap-south-2 --query 'imageDetails[*].imageTags' --output table
----------------
|DescribeImages|
+--------------+
|  a3f9c21     |+--------------+
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
Unable to find image '311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21' locally
a3f9c21: Pulling from shelfapi-backend
6a0ac1617861: Pull complete
4feea04c1543: Pull complete
b2cbbfe903b0: Pull complete
fff4e2c1b189: Pull complete
6a1b2e388398: Pull complete
38c70116a9e2: Pull complete
2ea9c899dbc1: Pull complete
6fd88e7aae1d: Pull complete
cdb0b21d52c2: Pull complete
e26fd0cf9413: Pull complete
b42e0281cc0c: Pull complete
Digest: sha256:6819302e8104c071aff98644803fcd628fc04695bb14875780443b9b9fc51b6d
Status: Downloaded newer image for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
11f88bc84242ede075a791e7820667797251a9f6262b18efeec8c42989105161
[ec2-user@ip-10-0-1-95 ~]$ docker ps
CONTAINER ID   IMAGE                                                                    COMMAND                  CREATED          STATUS                        PORTS     NAMES
11f88bc84242   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21   "docker-entrypoint.s…"   12 seconds ago   Restarting (1) 1 second ago             shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker logs -f shelfapi-app
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
[ec2-user@ip-10-0-1-95 ~]$







---------------------------------


Microsoft Windows [Version 10.0.26200.9168]
(c) Microsoft Corporation. All rights reserved.

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
ERROR: failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine; check if the path is correct and if the daemon is running: open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
ERROR: failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine; check if the path is correct and if the daemon is running: open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
[+] Building 84.6s (9/16)                                                                                                                     docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                          0.3s
 => => transferring dockerfile: 555B                                                                                                                          0.1s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.7s
 => [internal] load .dockerignore                                                                                                                             0.2s
 => => transferring context: 111B                                                                                                                             0.0s
 => [internal] load build context                                                                                                                             0.3s
 => => transferring context: 1.41MB                                                                                                                           0.2s
 => CACHED [builder 1/8] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                        0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [builder 2/8] WORKDIR /app                                                                                                                                0.1s
 => [builder 3/8] COPY package*.json ./                                                                                                                       0.2s
 => CANCELED [builder 4/8] RUN npm ci                                                                                                                        80.6s
 => ERROR [production 4/7] RUN npm ci --omit=dev                                                                                                             79.6s
------                                                                                                                                                             
 > [production 4/7] RUN npm ci --omit=dev:                                                                                                                         
3.092 npm warn EBADENGINE Unsupported engine {                                                                                                                     
3.092 npm warn EBADENGINE   package: '@prisma/streams-local@0.1.11',
3.092 npm warn EBADENGINE   required: { bun: '>=1.2.0', node: '>=22.0.0' },
3.092 npm warn EBADENGINE   current: { node: 'v20.20.2', npm: '10.8.2' }
3.092 npm warn EBADENGINE }
5.965 npm warn deprecated uuid@8.0.0: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
6.703 npm warn deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
26.55 npm warn deprecated aws-sdk@2.1693.0: The AWS SDK for JavaScript (v2) has reached end-of-support, and no longer receives updates. Please migrate your code to use AWS SDK for JavaScript (v3). More info https://a.co/cUPnyil
74.54 npm error code 1
74.54 npm error path /app/node_modules/argon2
74.54 npm error command failed
74.54 npm error command sh -c cross-env ZERO_AR_DATE=1 node-gyp-build
74.54 npm error gyp info it worked if it ends with ok
74.54 npm error gyp info using node-gyp@10.1.0
74.54 npm error gyp info using node@20.20.2 | linux | x64
74.54 npm error gyp ERR! find Python 
74.54 npm error gyp ERR! find Python Python is not set from command line or npm configuration
74.54 npm error gyp ERR! find Python Python is not set from environment variable PYTHON
74.54 npm error gyp ERR! find Python checking if "python3" can be used
74.54 npm error gyp ERR! find Python - executable path is ""
74.54 npm error gyp ERR! find Python - "" could not be run
74.54 npm error gyp ERR! find Python checking if "python" can be used
74.54 npm error gyp ERR! find Python - executable path is ""
74.54 npm error gyp ERR! find Python - "" could not be run
74.54 npm error gyp ERR! find Python 
74.54 npm error gyp ERR! find Python **********************************************************
74.54 npm error gyp ERR! find Python You need to install the latest version of Python.
74.54 npm error gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
74.54 npm error gyp ERR! find Python you can try one of the following options:
74.54 npm error gyp ERR! find Python - Use the switch --python="/path/to/pythonexecutable"
74.54 npm error gyp ERR! find Python (accepted by both node-gyp and npm)
74.54 npm error gyp ERR! find Python - Set the environment variable PYTHON
74.54 npm error gyp ERR! find Python - Set the npm configuration variable python:
74.54 npm error gyp ERR! find Python npm config set python "/path/to/pythonexecutable"
74.54 npm error gyp ERR! find Python For more information consult the documentation at:
74.54 npm error gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
74.54 npm error gyp ERR! find Python **********************************************************
74.54 npm error gyp ERR! find Python 
74.54 npm error gyp ERR! configure error 
74.54 npm error gyp ERR! stack Error: Could not find any Python installation to use
74.54 npm error gyp ERR! stack at PythonFinder.fail (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:306:11)
74.54 npm error gyp ERR! stack at PythonFinder.findPython (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:164:17)
74.54 npm error gyp ERR! stack at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
74.54 npm error gyp ERR! stack at async configure (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:27:18)
74.54 npm error gyp ERR! stack at async run (/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js:81:18)
74.54 npm error gyp ERR! System Linux 6.6.87.2-microsoft-standard-WSL2
74.54 npm error gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
74.54 npm error gyp ERR! cwd /app/node_modules/argon2
74.54 npm error gyp ERR! node -v v20.20.2
74.54 npm error gyp ERR! node-gyp -v v10.1.0
74.54 npm error gyp ERR! not ok
74.55 npm notice
74.55 npm notice New major version of npm available! 10.8.2 -> 12.0.2
74.55 npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.0.2
74.55 npm notice To update run: npm install -g npm@12.0.2
74.55 npm notice
74.56 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-08-24T13_06_19_654Z-debug-0.log
------
Dockerfile:23
--------------------
  21 |     
  22 |     COPY package*.json ./
  23 | >>> RUN npm ci --omit=dev
  24 |     
  25 |     COPY --from=builder /app/dist ./dist
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm ci --omit=dev" did not complete successfully: exit code: 1

What's next:
    Debug this build failure with Gordon → docker ai "help me fix this build failure"

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
[+] Building 104.5s (14/17)                                                                                                                   docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                          0.0s
 => => transferring dockerfile: 798B                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.0s
 => [internal] load .dockerignore                                                                                                                             0.0s
 => => transferring context: 111B                                                                                                                             0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                               0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [internal] load build context                                                                                                                             0.1s
 => => transferring context: 12.74kB                                                                                                                          0.0s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                         0.0s
 => [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                                    18.7s
 => [builder 4/9] COPY package*.json ./                                                                                                                       0.2s 
 => [builder 5/9] RUN npm ci                                                                                                                                 71.0s 
 => [production 5/8] RUN npm ci --omit=dev                                                                                                                   64.8s 
 => [builder 6/9] COPY prisma ./prisma                                                                                                                        0.9s 
 => [builder 7/9] RUN npx prisma generate                                                                                                                     2.9s 
 => [builder 8/9] COPY . .                                                                                                                                    0.2s 
 => ERROR [builder 9/9] RUN npm run build                                                                                                                     8.0s 
------
 > [builder 9/9] RUN npm run build:
0.571 
0.571 > ShelfAPI@0.0.1 build
0.571 > nest build
0.571 
7.833 error TS2688: Cannot find type definition file for 'Multer'.
7.833   The file is in the program because:
7.833     Entry point of type library 'Multer' specified in compilerOptions
7.833 src/docs/docs.controller.ts:112:35 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
7.833 
7.833 112     @UploadedFile() file: Express.Multer.File,
7.833                                       ~~~~~~
7.833 src/docs/docs.service.ts:14:17 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
7.833 
7.833 14   file: Express.Multer.File
7.833                    ~~~~~~
7.833 
7.838 Found 3 error(s).
7.838 
------
Dockerfile:17
--------------------
  15 |     
  16 |     COPY . .
  17 | >>> RUN npm run build
  18 |     
  19 |     # --- Stage 2: Production runtime ---
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1

What's next:
    Debug this build failure with Gordon → docker ai "help me fix this build failure"

C:\My_Projects\ShelfAPI-backend>npm install -D @types/multer

up to date, audited 925 packages in 14s

177 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (2 moderate, 3 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
npm notice
npm notice New minor version of npm available! 11.9.0 -> 11.19.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.19.0
npm notice To update run: npm install -g npm@11.19.0
npm notice

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
[+] Building 11.1s (14/17)                                                                                                                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                          0.1s
 => => transferring dockerfile: 798B                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.1s
 => [internal] load .dockerignore                                                                                                                             0.0s
 => => transferring context: 111B                                                                                                                             0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                               0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [internal] load build context                                                                                                                             0.2s
 => => transferring context: 496.81kB                                                                                                                         0.1s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                         0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                              0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                                0.0s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                             0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                           0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                                 0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                              0.0s
 => [builder 8/9] COPY . .                                                                                                                                    0.2s
 => ERROR [builder 9/9] RUN npm run build                                                                                                                     8.2s
------                                                                                                                                                             
 > [builder 9/9] RUN npm run build:                                                                                                                                
0.629                                                                                                                                                              
0.629 > ShelfAPI@0.0.1 build                                                                                                                                       
0.629 > nest build                                                                                                                                                 
0.629                                                                                                                                                              
8.046 src/docs/docs.controller.ts:112:35 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
8.046 
8.046 112     @UploadedFile() file: Express.Multer.File,
8.046                                       ~~~~~~
8.046 src/docs/docs.service.ts:14:17 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
8.046 
8.046 14   file: Express.Multer.File
8.046                    ~~~~~~
8.046 
8.052 Found 2 error(s).
8.052 
------
Dockerfile:17
--------------------
  15 |     
  16 |     COPY . .
  17 | >>> RUN npm run build
  18 |     
  19 |     # --- Stage 2: Production runtime ---
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1

What's next:
    Debug this build failure with Gordon → docker ai "help me fix this build failure"

C:\My_Projects\ShelfAPI-backend>npx tsc --noEmit
src/docs/docs.controller.ts:112:35 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.

112     @UploadedFile() file: Express.Multer.File,
                                      ~~~~~~

src/docs/docs.service.ts:14:17 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.

14   file: Express.Multer.File
                   ~~~~~~


Found 2 errors in 2 files.

Errors  Files
     1  src/docs/docs.controller.ts:112
     1  src/docs/docs.service.ts:14

C:\My_Projects\ShelfAPI-backend>npm ls @types/express @types/multer multer
ShelfAPI@0.0.1 C:\My_Projects\ShelfAPI-backend
├─┬ @nestjs/platform-express@11.1.28
│ └── multer@2.2.0
├─┬ @types/cookie-parser@1.4.10
│ └── @types/express@5.0.6 deduped
├── @types/express@5.0.6
└─┬ @types/multer@2.2.0
  └── @types/express@5.0.6 deduped


C:\My_Projects\ShelfAPI-backend>npm ls express
ShelfAPI@0.0.1 C:\My_Projects\ShelfAPI-backend
└─┬ @nestjs/platform-express@11.1.28
  └── express@5.2.1


C:\My_Projects\ShelfAPI-backend>type tsconfig.json
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "types": ["node", "jest"],
    // "baseUrl": ".",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "noFallthroughCasesInSwitch": true,
    "strictPropertyInitialization": false
  }
}

C:\My_Projects\ShelfAPI-backend>npm ls @types/node typescript
ShelfAPI@0.0.1 C:\My_Projects\ShelfAPI-backend
├─┬ @nestjs/cli@11.0.24
│ ├─┬ @angular-devkit/schematics-cli@19.2.27
│ │ └─┬ @inquirer/prompts@7.3.2
│ │   └── @types/node@24.13.3 deduped
│ ├─┬ @inquirer/prompts@7.10.1
│ │ ├─┬ @inquirer/checkbox@4.3.2
│ │ │ ├─┬ @inquirer/core@10.3.2
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ ├─┬ @inquirer/type@3.0.10
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/confirm@5.1.21
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/editor@4.2.23
│ │ │ ├─┬ @inquirer/external-editor@1.0.3
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/expand@4.0.23
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/input@4.3.1
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/number@3.0.23
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/password@4.0.23
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/rawlist@4.1.11
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/search@3.2.2
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/select@4.4.2
│ │ │ └── @types/node@24.13.3 deduped
│ │ └── @types/node@24.13.3 deduped
│ ├─┬ fork-ts-checker-webpack-plugin@9.1.0
│ │ ├─┬ cosmiconfig@8.3.6
│ │ │ └── typescript@5.9.3 deduped
│ │ └── typescript@5.9.3 deduped
│ ├── typescript@5.9.3 deduped
│ └─┬ webpack@5.106.2
│   └─┬ terser-webpack-plugin@5.6.1
│     └─┬ jest-worker@27.5.1
│       └── @types/node@24.13.3 deduped
├─┬ @nestjs/jwt@11.0.2
│ └─┬ @types/jsonwebtoken@9.0.10
│   └── @types/node@24.13.3 deduped
├─┬ @nestjs/schematics@11.1.0
│ └── typescript@5.9.3 deduped
├─┬ @prisma/adapter-pg@7.9.1
│ └─┬ @types/pg@8.21.0
│   └── @types/node@24.13.3 deduped
├─┬ @prisma/client@7.9.1
│ └── typescript@5.9.3 deduped
├─┬ @types/express@5.0.6
│ ├─┬ @types/body-parser@1.19.6
│ │ ├─┬ @types/connect@3.4.38
│ │ │ └── @types/node@24.13.3 deduped
│ │ └── @types/node@24.13.3 deduped
│ ├─┬ @types/express-serve-static-core@5.1.3
│ │ ├── @types/node@24.13.3 deduped
│ │ └─┬ @types/send@1.2.1
│ │   └── @types/node@24.13.3 deduped
│ └─┬ @types/serve-static@2.2.0
│   └── @types/node@24.13.3 deduped
├─┬ @types/jest@30.0.0
│ └─┬ expect@30.4.1
│   └─┬ jest-mock@30.4.1
│     └── @types/node@24.13.3 deduped
├── @types/node@24.13.3
├─┬ @types/supertest@7.2.1
│ └─┬ @types/superagent@8.1.11
│   └── @types/node@24.13.3 deduped
├─┬ jest@30.4.2
│ ├─┬ @jest/core@30.4.2
│ │ ├─┬ @jest/console@30.4.1
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @jest/pattern@30.4.0
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @jest/reporters@30.4.1
│ │ │ ├── @types/node@24.13.3 deduped
│ │ │ └─┬ jest-worker@30.4.1
│ │ │   └── @types/node@24.13.3 deduped
│ │ ├── @types/node@24.13.3 deduped
│ │ ├─┬ jest-config@30.4.2
│ │ │ ├── @types/node@24.13.3 deduped
│ │ │ ├─┬ jest-circus@30.4.2
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └─┬ jest-environment-node@30.4.1
│ │ │   └── @types/node@24.13.3 deduped
│ │ ├─┬ jest-haste-map@30.4.1
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ jest-runner@30.4.2
│ │ │ ├─┬ @jest/environment@30.4.1
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ jest-runtime@30.4.2
│ │ │ ├─┬ @jest/fake-timers@30.4.1
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ └─┬ jest-watcher@30.4.1
│ │   └── @types/node@24.13.3 deduped
│ └─┬ @jest/types@30.4.1
│   └── @types/node@24.13.3 deduped
├─┬ prisma@7.9.1
│ ├─┬ @prisma/dev@0.24.17
│ │ └─┬ valibot@1.4.2
│ │   └── typescript@5.9.3 deduped
│ └── typescript@5.9.3 deduped
├─┬ ts-jest@29.4.12
│ ├─┬ jest-util@30.4.1
│ │ └── @types/node@24.13.3 deduped
│ └── typescript@5.9.3 deduped
├─┬ ts-loader@9.6.2
│ ├── typescript@5.9.3 deduped
│ └─┬ webpack@5.109.2
│   └─┬ minimizer-webpack-plugin@5.6.1
│     └─┬ jest-worker@27.5.1
│       └── @types/node@24.13.3 deduped
├─┬ ts-node@10.9.2
│ ├── @types/node@24.13.3 deduped
│ └── typescript@5.9.3 deduped
├─┬ typescript-eslint@8.66.0
│ ├─┬ @typescript-eslint/eslint-plugin@8.66.0
│ │ ├─┬ @typescript-eslint/type-utils@8.66.0
│ │ │ └── typescript@5.9.3 deduped
│ │ ├─┬ ts-api-utils@2.5.0
│ │ │ └── typescript@5.9.3 deduped
│ │ └── typescript@5.9.3 deduped
│ ├─┬ @typescript-eslint/parser@8.66.0
│ │ └── typescript@5.9.3 deduped
│ ├─┬ @typescript-eslint/typescript-estree@8.66.0
│ │ ├─┬ @typescript-eslint/project-service@8.66.0
│ │ │ └── typescript@5.9.3 deduped
│ │ ├─┬ @typescript-eslint/tsconfig-utils@8.66.0
│ │ │ └── typescript@5.9.3 deduped
│ │ └── typescript@5.9.3 deduped
│ ├─┬ @typescript-eslint/utils@8.66.0
│ │ └── typescript@5.9.3 deduped
│ └── typescript@5.9.3 deduped
└── typescript@5.9.3


C:\My_Projects\ShelfAPI-backend>npx tsc --noEmit

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
[+] Building 68.3s (18/18) FINISHED                                                                                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                          0.1s
 => => transferring dockerfile: 798B                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.4s
 => [internal] load .dockerignore                                                                                                                             0.0s
 => => transferring context: 111B                                                                                                                             0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                               0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [internal] load build context                                                                                                                             0.1s
 => => transferring context: 13.54kB                                                                                                                          0.0s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                             0.0s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                         0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                              0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                                0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                           0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                                 0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                              0.0s
 => [builder 8/9] COPY . .                                                                                                                                    0.1s
 => [builder 9/9] RUN npm run build                                                                                                                           8.3s
 => [production 6/8] COPY --from=builder /app/dist ./dist                                                                                                     0.4s
 => [production 7/8] COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma                                                                     0.4s
 => [production 8/8] COPY prisma ./prisma                                                                                                                     0.2s
 => exporting to image                                                                                                                                       53.6s
 => => exporting layers                                                                                                                                      37.1s
 => => exporting manifest sha256:525e8c371e65aebcf41bc48962755d942df208f4018f1c1b67de4e93c1adfe8d                                                             0.1s
 => => exporting config sha256:26131225f292f14c8080fda426e7c630d6d53995db1f64b8aaf41a8640e7a45b                                                               0.1s
 => => exporting attestation manifest sha256:27110c7cf4079bbdfc0aff8d4b7bcc9d0f4a3138575bb6aef8242f16195bb626                                                 0.1s
 => => exporting manifest list sha256:6819302e8104c071aff98644803fcd628fc04695bb14875780443b9b9fc51b6d                                                        0.1s
 => => naming to 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21                                                                       0.0s
 => => unpacking to 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21                                                                   16.1s

C:\My_Projects\ShelfAPI-backend>docker push 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
The push refers to repository [311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend]
b42e0281cc0c: Pushed 
4feea04c1543: Pushed 
e26fd0cf9413: Pushed 
2ea9c899dbc1: Pushed 
b2cbbfe903b0: Pushed 
fff4e2c1b189: Pushed 
2b4b1adafb77: Pushed 
38c70116a9e2: Pushed 
6fd88e7aae1d: Pushed 
cdb0b21d52c2: Pushed 
6a0ac1617861: Pushed 
6a1b2e388398: Pushed 
a3f9c21: digest: sha256:6819302e8104c071aff98644803fcd628fc04695bb14875780443b9b9fc51b6d size: 856

C:\My_Projects\ShelfAPI-backend>git rev-parse --short HEAD
655f609

C:\My_Projects\ShelfAPI-backend>aws ecr describe-images --repository-name shelfapi-backend --region ap-south-2
{                                                                                                                                                                 
    "imageDetails": [
        {
            "registryId": "311752058283",
            "repositoryName": "shelfapi-backend",
            "imageDigest": "sha256:27110c7cf4079bbdfc0aff8d4b7bcc9d0f4a3138575bb6aef8242f16195bb626",
            "imageSizeInBytes": 1725,
            "imagePushedAt": "2026-08-24T19:27:44.049000+05:30",
            "imageManifestMediaType": "application/vnd.oci.image.manifest.v1+json",
            "artifactMediaType": "application/vnd.oci.image.config.v1+json",
            "imageStatus": "ACTIVE"
        },
        {
            "registryId": "311752058283",
            "repositoryName": "shelfapi-backend",
            "imageDigest": "sha256:525e8c371e65aebcf41bc48962755d942df208f4018f1c1b67de4e93c1adfe8d",
            "imageSizeInBytes": 424821382,
            "imagePushedAt": "2026-08-24T19:27:44.073000+05:30",
            "imageManifestMediaType": "application/vnd.oci.image.manifest.v1+json",
^C                                                                                                                                                                

C:\My_Projects\ShelfAPI-backend>docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609        

What's next:
    Debug this container error with Gordon → docker ai "help me fix this container error"
docker: --env-file: open /home/ec2-user/.env: The system cannot find the path specified.

Run 'docker run --help' for more information

C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build

error TS6059: File 'C:/My_Projects/ShelfAPI-backend/generated/prisma/browser.ts' is not under 'rootDir' 'C:/My_Projects/ShelfAPI-backend/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by default include pattern '**/*'
  File is CommonJS module because 'C:/My_Projects/ShelfAPI-backend/package.json' does not have field "type"
error TS6059: File 'C:/My_Projects/ShelfAPI-backend/generated/prisma/client.ts' is not under 'rootDir' 'C:/My_Projects/ShelfAPI-backend/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by default include pattern '**/*'
  File is CommonJS module because 'C:/My_Projects/ShelfAPI-backend/package.json' does not have field "type"
error TS6059: File 'C:/My_Projects/ShelfAPI-backend/prisma.config.ts' is not under 'rootDir' 'C:/My_Projects/ShelfAPI-backend/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by default include pattern '**/*'
  File is CommonJS module because 'C:/My_Projects/ShelfAPI-backend/package.json' does not have field "type"

Found 3 error(s).


C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


-------------------------


sh-5.2$ docker stop shelfapi-app
shelfapi-app
sh-5.2$ docker rm shelfapi-app
shelfapi-app
sh-5.2$ docker pull 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
a3f9c21: Pulling from shelfapi-backend
Digest: sha256:6819302e8104c071aff98644803fcd628fc04695bb14875780443b9b9fc51b6d
Status: Image is up to date for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
sh-5.2$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
docker: open /home/ec2-user/.env: permission denied.
See 'docker run --help'.
sh-5.2$ sudo su - ec2-user
Last login: Mon Aug 24 14:07:21 UTC 2026 on pts/3
[ec2-user@ip-10-0-1-95 ~]$ aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
WARNING! Your password will be stored unencrypted in /home/ec2-user/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
22eb6cd0139814b394e4dae325215c9df2d1fb9d9733a46ad81981d69b2ffeef
[ec2-user@ip-10-0-1-95 ~]$ docker logs -f shelfapi-app
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)    at Module._load (node:internal/modules/cjs/loader:1038:27)    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
node:internal/modules/cjs/loader:1210
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.20.2
[ec2-user@ip-10-0-1-95 ~]$ docker tag shelfapi-backend:latest 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21-v2
Error response from daemon: No such image: shelfapi-backend:latest
[ec2-user@ip-10-0-1-95 ~]$ docker images
REPOSITORY                                                       TAG       IMAGE ID       CREATED          SIZE
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   a3f9c21   26131225f292   46 minutes ago   1.18GB
[ec2-user@ip-10-0-1-95 ~]$ docker ps -a
CONTAINER ID   IMAGE                                                                    COMMAND                  CREATED         STATUS                          PORTS     NAMES
22eb6cd01398   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21   "docker-entrypoint.s…"   3 minutes ago   Restarting (1) 32 seconds ago             shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker stop shelfapi-app
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker rm shelfapi-app
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker run -d \
  --name shelfapi-app \
  --restart unless-stopped \
  -p 3000:3000 \
  --env-file /home/ec2-user/.env \
  311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
09f4f8a887441a801c0a543c51f480491199278d64c03a923e4f3b665df90268
[ec2-user@ip-10-0-1-95 ~]$ whoami
ec2-user
[ec2-user@ip-10-0-1-95 ~]$ aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
WARNING! Your password will be stored unencrypted in /home/ec2-user/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[ec2-user@ip-10-0-1-95 ~]$ docker pull 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
655f609: Pulling from shelfapi-backend
6a0ac1617861: Already exists
4feea04c1543: Already exists
b2cbbfe903b0: Already exists
fff4e2c1b189: Already exists
6a1b2e388398: Already exists
38c70116a9e2: Already exists
2ea9c899dbc1: Already exists
6fd88e7aae1d: Already exists
0dc6dcd1e2cf: Pull complete
e9bcf3e7fc8e: Pull complete
e0602ab3ff19: Pull complete
Digest: sha256:0863d438b8ad79a9e05e5faa1ef01183964bd90d36995435346f6273ca439eb0
Status: Downloaded newer image for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
[ec2-user@ip-10-0-1-95 ~]$ docker stop shelfapi-app 2>/dev/null || true
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker rm shelfapi-app 2>/dev/null || true
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ sudo cp /home/ec2-user/.env /home/ssm-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ sudo chown ssm-user:ssm-user /home/ssm-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ sudo chmod 600 /home/ssm-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ssm-user/shelfapi.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:b72d91e
docker: open /home/ssm-user/shelfapi.env: permission denied.
See 'docker run --help'.
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ssm-user/shelfapi.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
docker: open /home/ssm-user/shelfapi.env: permission denied.
See 'docker run --help'.
[ec2-user@ip-10-0-1-95 ~]$ docker rm shelfapi-appError response from daemon: No such container: shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker imagesREPOSITORY                                                       TAG       IMAGE ID       CREATED          SIZE
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   655f609   83cc6f4522c9   17 minutes ago   1.18GB
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   a3f9c21   26131225f292   58 minutes ago   1.18GB
[ec2-user@ip-10-0-1-95 ~]$ sudo cp /home/ec2-user/.env /home/ec2-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ sudo chown ec2-user:ec2-user /home/ec2-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ chmod 600 /home/ec2-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ ls -l /home/ec2-user/shelfapi.env
-rw-------. 1 ec2-user ec2-user 197 Aug 24 14:50 /home/ec2-user/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/shelfapi.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
3067e4488e19cd5356fa2fd1b547173c807104c36d21c8d8641df9d33df49314
[ec2-user@ip-10-0-1-95 ~]$ docker ps
CONTAINER ID   IMAGE                                                                    COMMAND                  CREATED          STATUS                         PORTS     NAMES
3067e4488e19   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609   "docker-entrypoint.s…"   14 seconds ago   Restarting (1) 2 seconds ago             shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker logs shelfapi-app
[Nest] 1  - 08/24/2026, 2:51:20 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:20 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '271a4a997c46ee3c655df'
  },
  moduleRef: {
    id: 'dac7ad16e67a0b28f6800'
  }
}
[Nest] 1  - 08/24/2026, 2:51:22 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:22 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '9d3f018acbe56f365f110'
  },
  moduleRef: {
    id: '64074880f8580d4df25b5'
  }
}
[Nest] 1  - 08/24/2026, 2:51:23 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:23 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '3376c990b942d9d9904a9'
  },
  moduleRef: {
    id: '8d0937c72cbb62823011b'
  }
}
[Nest] 1  - 08/24/2026, 2:51:24 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:24 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '73f75190b42e6c8572441'
  },
  moduleRef: {
    id: 'a0415aaf8b8d340333285'
  }
}
[Nest] 1  - 08/24/2026, 2:51:26 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:26 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '4f40eaa7cd639185430a3'
  },
  moduleRef: {
    id: '4997cbc4a8247504b0494'
  }
}
[Nest] 1  - 08/24/2026, 2:51:29 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:29 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '0ef7e25f573dfe5c59781'
  },
  moduleRef: {
    id: '4beaaaa68f70c06122b3e'
  }
}
[Nest] 1  - 08/24/2026, 2:51:33 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:34 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '965c335d74b80af956e46'
  },
  moduleRef: {
    id: '07f98141c8eef7e97111f'
  }
}
[Nest] 1  - 08/24/2026, 2:51:41 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:51:41 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the DocsModule module.

Potential solutions:
- Is DocsModule a valid NestJS module?
- If S3Client is a provider, is it part of the current DocsModule?
- If S3Client is exported from a separate @Module, is that module imported within DocsModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 3)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '34cb8155bcced310623d6'
  },
  moduleRef: {
    id: '1e126963ddc247bbd700d'
  }
}
[ec2-user@ip-10-0-1-95 ~]$ docker update --restart=no shelfapi-app
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker stop shelfapi-app
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker pull 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c
6eee52c: Pulling from shelfapi-backend
6a0ac1617861: Already exists
4feea04c1543: Already exists
b2cbbfe903b0: Already exists
fff4e2c1b189: Already exists
6a1b2e388398: Already exists
38c70116a9e2: Already exists
2ea9c899dbc1: Already exists
6fd88e7aae1d: Already exists
444f682fbbf7: Pull complete
e7e7eb66aece: Pull complete
27a87c3a5a25: Pull complete
Digest: sha256:fac179c38fdc93f806a66aa4b26d1c1f8db1f9aa055a633878c96c3d25282f7c
Status: Downloaded newer image for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c
[ec2-user@ip-10-0-1-95 ~]$ docker stop shelfapi-app 2>/dev/null || true
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker rm shelfapi-app 2>/dev/null || true
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/shelfapi.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:8c42f1a
Unable to find image '311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:8c42f1a' locally
docker: Error response from daemon: manifest for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:8c42f1a not found: manifest unknown: Requested image not found.
See 'docker run --help'.
[ec2-user@ip-10-0-1-95 ~]$ docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/shelfapi.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c
faa542a4241f6117fe9c066570c37c6de76c1a528cd7e182d843cc9ae6ccec4b
[ec2-user@ip-10-0-1-95 ~]$ docker ps
CONTAINER ID   IMAGE                                                                    COMMAND                  CREATED         STATUS                                  PORTS     NAMES
faa542a4241f   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c   "docker-entrypoint.s…"   8 seconds ago   Restarting (1) Less than a second ago       shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker logs shelfapi-app
[Nest] 1  - 08/24/2026, 2:59:27 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:27 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: 'fdae3a50564a2139eff24'
  },
  moduleRef: {
    id: '8fc1eca503bf1a866cc7c'
  }
}
[Nest] 1  - 08/24/2026, 2:59:28 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:29 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '7f9f0143c8c1a8ee91153'
  },
  moduleRef: {
    id: '65c6cf443247efe480614'
  }
}
[Nest] 1  - 08/24/2026, 2:59:30 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:30 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: 'aecc8fb5c4c26c4547970'
  },
  moduleRef: {
    id: 'ac62c139cfaf7cc392a03'
  }
}
[Nest] 1  - 08/24/2026, 2:59:31 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:31 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '683bc3d83bc54300d4486'
  },
  moduleRef: {
    id: '081d90fa6cf93102abfbf'
  }
}
[Nest] 1  - 08/24/2026, 2:59:33 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:33 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '7dc9574d9bb635a3fb095'
  },
  moduleRef: {
    id: 'b4388825dbbf247878ccd'
  }
}
[Nest] 1  - 08/24/2026, 2:59:36 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:36 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: 'd090070e7515dcf54608e'
  },
  moduleRef: {
    id: 'f65a11469acb764d76351'
  }
}
[Nest] 1  - 08/24/2026, 2:59:40 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 2:59:40 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '464fbe94214751f86b7e5'
  },
  moduleRef: {
    id: 'cfdbbaab163c7b365d7bd'
  }
}
[ec2-user@ip-10-0-1-95 ~]$ docker inspect shelfapi-app --format '{{.Config.Image}}'
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c
[ec2-user@ip-10-0-1-95 ~]$ docker ps -a --no-trunc --filter name=shelfapi-app
CONTAINER ID                                                       IMAGE                                                                    COMMAND           CREATED         STATUS                          PORTS     NAMES
faa542a4241f6117fe9c066570c37c6de76c1a528cd7e182d843cc9ae6ccec4b   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c   "docker-entrypoint.sh node dist/main.js"   2 minutes ago   Restarting (1) 34 seconds ago             shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint sh 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -c "grep -R 'S3Client' /app/dist/docs/docs.module.js"
                provide: client_s3_1.S3Client,
                useFactory: () => new client_s3_1.S3Client({
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint sh 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -c "cat /app/dist/docs/docs.module.js"
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsModule = void 0;
const common_1 = require("@nestjs/common");
const docs_controller_1 = require("./docs.controller");
const docs_service_1 = require("./docs.service");
const prisma_service_1 = require("../prisma.service");
const jwt_1 = require("@nestjs/jwt");
const client_s3_1 = require("@aws-sdk/client-s3");
let DocsModule = class DocsModule {
};
exports.DocsModule = DocsModule;
exports.DocsModule = DocsModule = __decorate([
    (0, common_1.Module)({
        controllers: [docs_controller_1.DocsController],
        providers: [
            docs_service_1.DocsService,
            prisma_service_1.PrismaService,
            jwt_1.JwtService,
            {
                provide: client_s3_1.S3Client,
                useFactory: () => new client_s3_1.S3Client({
                    region: process.env.AWS_REGION,
                }),
            },
        ],
    })
], DocsModule);
//# sourceMappingURL=docs.module.js.map[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint sh 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -c"cat /app/dist/docs/docs.service.js | head -60"
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const errors_class_error_1 = require("../common/errors/errors-class.error");
const crypto_1 = require("crypto");
const client_s3_1 = require("@aws-sdk/client-s3");
let DocsService = class DocsService {
    prisma;
    s3;
    constructor(prisma, s3) {
        this.prisma = prisma;
        this.s3 = s3;
    }
    async findAllDocuments() { }
    async addDocument(addDocumentDto, userId) {
        await this.prisma.document.create({
            data: {
                title: addDocumentDto.title,
                description: addDocumentDto.description,
                user_id: userId,
                tags: {
                    create: addDocumentDto.tags?.map((name) => ({
                        tag: {
                            connectOrCreate: {
                                where: {
                                    user_id_name: {
                                        user_id: userId,
                                        name,
                                    },
                                },
                                create: {
                                    user_id: userId,
                                    name,
                                },
                            },
                        },
                    })),
                },
            },
            include: {
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });
    }
    async deleteAllDocs(userId) {
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint sh 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -c "grep -A15 -B5 '__metadata' /app/dist/docs/docs.service.js"
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const errors_class_error_1 = require("../common/errors/errors-class.error");
const crypto_1 = require("crypto");
const client_s3_1 = require("@aws-sdk/client-s3");
let DocsService = class DocsService {
    prisma;
    s3;
    constructor(prisma, s3) {
        this.prisma = prisma;
        this.s3 = s3;
--
    }
};
exports.DocsService = DocsService;
exports.DocsService = DocsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, client_s3_1.S3Client])
], DocsService);
//# sourceMappingURL=docs.service.js.map
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint sh 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -c "grep -A15 -B5 'design:paramtypes' /app/dist/docs/docs.service.js"
    }
};
exports.DocsService = DocsService;
exports.DocsService = DocsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, client_s3_1.S3Client])
], DocsService);
//# sourceMappingURL=docs.service.js.map
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint node 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -e "const {S3Client}=require('@aws-sdk/client-s3'); const m=require('./dist/docs/docs.module.js'); const s=require('./dist/docs/docs.service.js'); console.log('S3Client:', S3Client); console.log('Module:', m.DocsModule); console.log('Service:', s.DocsService);"
S3Client: [class S3Client extends Client]
Module: [class DocsModule]
Service: [class DocsService]
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint node 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -e "const a=require('@aws-sdk/client-s3'); const m=require('./dist/docs/docs.module.js'); const s=require('./dist/docs/docs.service.js'); const md=require('@nestjs/common/constants'); const providers=Reflect.getMetadata(md.MODULE_METADATA.PROVIDERS,m.DocsModule); const params=Reflect.getMetadata('design:paramtypes',s.DocsService); console.log('resolve:',require.resolve('@aws-sdk/client-s3')); console.log('SAME TOKEN:',a.S3Client===params[1]); console.log('PARAM:',params[1]); console.log('PROVIDERS:',providers); console.log('PROVIDER S3 MATCH:',providers.some(p=>p&&typeof p==='object'&&p.provide===params[1]));"
resolve: /app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js
SAME TOKEN: true
PARAM: [class S3Client extends Client]
PROVIDERS: [
  [class DocsService],
  [class PrismaService extends t],
  [class JwtService],
  {
    provide: [class S3Client extends Client],
    useFactory: [Function: useFactory]
  }
]
PROVIDER S3 MATCH: true
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint node 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -e "const p=require('@aws-sdk/client-s3'); console.log(require.resolve('@aws-sdk/client-s3')); console.log(require.resolve('@nestjs/core')); console.log(p.S3Client===require('@aws-sdk/client-s3').S3Client)"
/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js
/app/node_modules/@nestjs/core/index.js
true
[ec2-user@ip-10-0-1-95 ~]$ docker run --rm --entrypoint sh 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c -c "npm ls @aws-sdk/client-s3 --depth=10"
ShelfAPI@0.0.1 /app
`-- @aws-sdk/client-s3@3.1107.0

[ec2-user@ip-10-0-1-95 ~]$ docker logs --tail 100 shelfapi-app
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '8af9b3212e2f5189d6201'
  },
  moduleRef: {
    id: '2b298d019d4478f8c94f9'
  }
}
[Nest] 1  - 08/24/2026, 3:06:29 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 3:06:29 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '4cdcb4473432886e45578'
  },
  moduleRef: {
    id: '1d10d7dc46079df543cd9'
  }
}
[Nest] 1  - 08/24/2026, 3:07:30 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 3:07:30 PM   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the DocsService (PrismaService, ?). Please make sure that the argument S3Client at index [1] is available in the AppModule module.

Potential solutions:
- Is AppModule a valid NestJS module?
- If S3Client is a provider, is it part of the current AppModule?
- If S3Client is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing S3Client */ ]
  })

For more common dependency resolution issues, see: https://docs.nestjs.com/faq/common-errors
    at Injector.lookupComponentInParentModules (/app/node_modules/@nestjs/core/injector/injector.js:300:19)
    at async resolveParam (/app/node_modules/@nestjs/core/injector/injector.js:150:38)
    at async Promise.all (index 1)
    at async Injector.resolveConstructorParams (/app/node_modules/@nestjs/core/injector/injector.js:179:27)
    at async Injector.loadInstance (/app/node_modules/@nestjs/core/injector/injector.js:77:13)
    at async Injector.loadProvider (/app/node_modules/@nestjs/core/injector/injector.js:111:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 8)
    at async InstanceLoader.createInstancesOfProviders (/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
    at async /app/node_modules/@nestjs/core/injector/instance-loader.js:40:13 {
  type: 'DocsService',
  context: {
    index: 1,
    dependencies: [
      [class PrismaService extends t],
      [class S3Client extends Client]
    ],
    name: [class S3Client extends Client]
  },
  metadata: {
    id: '5acccb507792571252497'
  },
  moduleRef: {
    id: '481f755e500514c3daded'
  }
}
[ec2-user@ip-10-0-1-95 ~]$ docker exec shelfapi-app sh -c 'node -e "
const { NestFactory } = require(\"@nestjs/core\");
const { DocsModule } = require(\"/app/dist/docs/docs.module.js\");
const { DocsService } = require(\"/app/dist/docs/docs.service.js\");
const { S3Client } = require(\"@aws-sdk/client-s3\");

console.log(\"DocsModule:\", DocsModule.name);
console.log(\"DocsService:\", DocsService.name);
console.log(\"S3Client:\", S3Client.name);
console.log(\"S3 provider token:\", S3Client);
"'
Error response from daemon: Container faa542a4241f6117fe9c066570c37c6de76c1a528cd7e182d843cc9ae6ccec4b is restarting, wait until the container is running
[ec2-user@ip-10-0-1-95 ~]$ docker ps
CONTAINER ID   IMAGE                                                                    COMMAND                  CREATED          STATUS                          PORTSNAMES
faa542a4241f   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c   "docker-entrypoint.s…"   17 minutes ago   Restarting (1) 36 seconds agoshelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker pull 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3
a002af3: Pulling from shelfapi-backend
6a0ac1617861: Already exists
4feea04c1543: Already exists
b2cbbfe903b0: Already exists
fff4e2c1b189: Already exists
6a1b2e388398: Already exists
38c70116a9e2: Already exists
2ea9c899dbc1: Already exists
6fd88e7aae1d: Already exists
313ce4ca3fc6: Pull complete
1b2efcd69535: Pull complete
ee469e6a9acd: Pull complete
Digest: sha256:1150e9bba46a04f26df3b1b908a9467b0ebb20dfac62df34f14563e860f30690
Status: Downloaded newer image for 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3
[ec2-user@ip-10-0-1-95 ~]$ docker images | grep shelfapi-backend
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   a002af3   2d2aa3c203ff   About a minute ago   1.18GB
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   6eee52c   5a39339f4c20   20 minutes ago       1.18GB
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   655f609   83cc6f4522c9   46 minutes ago       1.18GB
311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend   a3f9c21   26131225f292   About an hour ago    1.18GB
[ec2-user@ip-10-0-1-95 ~]$ docker stop shelfapi-app 2>/dev/null || true
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker rm shelfapi-app 2>/dev/null || true
shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ sudo ls -l /etc/shelfapi.env
ls: cannot access '/etc/shelfapi.env': No such file or directory
[ec2-user@ip-10-0-1-95 ~]$ sudo cp /home/ec2-user/.env /etc/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ sudo chown root:root /etc/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ sudo chmod 644 /etc/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ sudo ls -l /etc/shelfapi.env
-rw-r--r--. 1 root root 197 Aug 24 15:18 /etc/shelfapi.env
[ec2-user@ip-10-0-1-95 ~]$ docker run -d \
  --name shelfapi-app \
  --restart unless-stopped \
  -p 3000:3000 \
  --env-file /etc/shelfapi.env \
  311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3
fdc2f39c4d727317704a1dffd3920d103c7e24c54e2164e69743a871616db606
[ec2-user@ip-10-0-1-95 ~]$ docker ps -a --filter name=shelfapi-app
CONTAINER ID   IMAGE                                                                    COMMAND                  CREATED         STATUS         PORTS                NAMES
fdc2f39c4d72   311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3   "docker-entrypoint.s…"   7 seconds ago   Up 6 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   shelfapi-app
[ec2-user@ip-10-0-1-95 ~]$ docker logs --tail 100 shelfapi-app
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] JwtModule dependencies initialized +57ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] UsersModule dependencies initialized +0ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] HealthModule dependencies initialized +0ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] AuthModule dependencies initialized +1ms
[Nest] 1  - 08/24/2026, 3:19:26 PM     LOG [InstanceLoader] DocsModule dependencies initialized +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RoutesResolver] AppController {/}: +418ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/, GET} route +6ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RoutesResolver] UsersController {/api/users}: +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/api/users, GET} route +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RoutesResolver] DocsController {/docs}: +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs, GET} route +3ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs, POST} route +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs, DELETE} route +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs/:id, GET} route +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs/:id, PATCH} route +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs/:id, DELETE} route +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/docs/:id/attachments, POST} route +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RoutesResolver] HealthController {/api/health}: +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/api/health, GET} route +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RoutesResolver] AuthController {/api/auth}: +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/api/auth/signup, POST} route +1ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/api/auth/login, POST} route +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/api/auth/refresh, POST} route +0ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [RouterExplorer] Mapped {/api/auth/logout, POST} route +4ms
[Nest] 1  - 08/24/2026, 3:19:27 PM     LOG [NestApplication] Nest application successfully started +3ms
(node:1) Warning: NodeVersionSupportWarning: The AWS SDK for JavaScript (v3)
versions published after the first week of January 2027
will require node >=22. You are running node v20.20.2.

To continue receiving updates to AWS services, bug fixes,
and security updates please upgrade to node >=22.

More information can be found at: https://a.co/c895JFp
(Use `node --trace-warnings ...` to show where the warning was created)
[ec2-user@ip-10-0-1-95 ~]$


-----------

        deleted:    shelf_backend/docs/API.md
        deleted:    shelf_backend/docs/ERROR.md
        deleted:    shelf_backend/docs/TRACK.md
        deleted:    shelf_backend/eslint.config.mjs
        deleted:    shelf_backend/generated/prisma/browser.ts
        deleted:    shelf_backend/generated/prisma/client.ts
        deleted:    shelf_backend/generated/prisma/commonInputTypes.ts
        deleted:    shelf_backend/generated/prisma/enums.ts
        deleted:    shelf_backend/generated/prisma/internal/class.ts
        deleted:    shelf_backend/generated/prisma/internal/prismaNamespace.ts
        deleted:    shelf_backend/generated/prisma/internal/prismaNamespaceBrowser.ts
        deleted:    shelf_backend/generated/prisma/models.ts
        deleted:    shelf_backend/generated/prisma/models/Attachment.ts
        deleted:    shelf_backend/generated/prisma/models/Document.ts
        deleted:    shelf_backend/generated/prisma/models/Session.ts
        deleted:    shelf_backend/generated/prisma/models/Tag.ts
        deleted:    shelf_backend/generated/prisma/models/TagsOnDocs.ts
        deleted:    shelf_backend/generated/prisma/models/User.ts
        deleted:    shelf_backend/nest-cli.json
        deleted:    shelf_backend/package-lock.json
        deleted:    shelf_backend/package.json
        deleted:    shelf_backend/prisma.config.ts
        deleted:    shelf_backend/prisma/migrations/20260808102347_init/migration.sql
        deleted:    shelf_backend/prisma/migrations/20260809134902_update_session_model/migration.sql
        deleted:    shelf_backend/prisma/migrations/migration_lock.toml
        deleted:    shelf_backend/prisma/schema.prisma
        deleted:    shelf_backend/skills-lock.json
        deleted:    shelf_backend/src/app.controller.spec.ts
        deleted:    shelf_backend/src/app.controller.ts
        deleted:    shelf_backend/src/app.module.ts
        deleted:    shelf_backend/src/app.service.ts
        deleted:    shelf_backend/src/auth/auth.constants.ts
        deleted:    shelf_backend/src/auth/auth.controller.spec.ts
        deleted:    shelf_backend/src/auth/auth.controller.ts
        deleted:    shelf_backend/src/auth/auth.dto.ts
        deleted:    shelf_backend/src/auth/auth.guard.ts
        deleted:    shelf_backend/src/auth/auth.hashing.ts
        deleted:    shelf_backend/src/auth/auth.module.ts
        deleted:    shelf_backend/src/auth/auth.service.spec.ts
        deleted:    shelf_backend/src/auth/auth.service.ts
        deleted:    shelf_backend/src/common/app-base.error.ts
        deleted:    shelf_backend/src/common/errors/errors-class.error.ts
        deleted:    shelf_backend/src/common/errors/exception-mapping.ts
        deleted:    shelf_backend/src/common/errors/global-exception.filter.ts
        deleted:    shelf_backend/src/common/schemas/schema.zod.ts
        deleted:    shelf_backend/src/common/schemas/zod.schema.ts
        deleted:    shelf_backend/src/docs/docs.controller.spec.ts
        deleted:    shelf_backend/src/docs/docs.controller.ts
        deleted:    shelf_backend/src/docs/docs.module.ts
        deleted:    shelf_backend/src/docs/docs.service.spec.ts
        deleted:    shelf_backend/src/docs/docs.service.ts
        deleted:    shelf_backend/src/health/health.controller.spec.ts
        deleted:    shelf_backend/src/health/health.controller.ts
        deleted:    shelf_backend/src/health/health.module.ts
        deleted:    shelf_backend/src/health/health.service.spec.ts
        deleted:    shelf_backend/src/health/health.service.ts
        deleted:    shelf_backend/src/main.ts
        deleted:    shelf_backend/src/prisma.service.ts
        deleted:    shelf_backend/src/users/users.controller.spec.ts
        deleted:    shelf_backend/src/users/users.controller.ts
        deleted:    shelf_backend/src/users/users.dto.ts
        deleted:    shelf_backend/src/users/users.module.ts
        deleted:    shelf_backend/src/users/users.service.spec.ts
        deleted:    shelf_backend/src/users/users.service.ts
        deleted:    shelf_backend/test/app.e2e-spec.ts
        deleted:    shelf_backend/test/jest-e2e.json
        deleted:    shelf_backend/tsconfig.build.json
        deleted:    shelf_backend/tsconfig.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .dockerignore
        .github/
        .prettierrc
        docs/
        eslint.config.mjs
        generated/
        nest-cli.json
        package-lock.json
        package.json
        prisma.config.d.ts
        prisma.config.js
        prisma.config.js.map
        prisma.config.ts
        prisma/
        skills-lock.json
        src/
        test/
        tsconfig.build.json
        tsconfig.json

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\My_Projects\ShelfAPI-backend> git rev-parse --short HEAD
655f609
PS C:\My_Projects\ShelfAPI-backend> git add .
warning: could not open directory '.claude/skills/prisma-cli/': No such file or directory
warning: could not open directory '.claude/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.claude/skills/prisma-compute/': No such file or directory
warning: could not open directory '.claude/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.claude/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-upgrade-v7/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-cli/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-compute/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-upgrade-v7/': No such file or directory
warning: in the working copy of 'generated/prisma/browser.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/browser.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/browser.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/client.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/client.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/client.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/commonInputTypes.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/commonInputTypes.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/commonInputTypes.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/enums.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/enums.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/enums.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/class.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/class.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/class.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/prismaNamespace.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/prismaNamespace.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/prismaNamespace.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/prismaNamespaceBrowser.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/prismaNamespaceBrowser.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/internal/prismaNamespaceBrowser.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Attachment.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Attachment.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Attachment.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Document.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Document.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Document.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Session.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Session.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Session.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Tag.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Tag.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/Tag.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/TagsOnDocs.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/TagsOnDocs.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/TagsOnDocs.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/User.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/User.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'generated/prisma/models/User.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma.config.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma.config.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma/migrations/20260808102347_init/migration.sql', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma/migrations/20260809134902_update_session_model/migration.sql', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma/migrations/migration_lock.toml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'prisma/schema.prisma', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'skills-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/auth/auth.module.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/health/health.module.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/users/users.module.ts', LF will be replaced by CRLF the next time Git touches it
PS C:\My_Projects\ShelfAPI-backend> git commit -m "fix: move dist to root and update tsconfig for multer"
[main 5b23ee8] fix: move dist to root and update tsconfig for multer
 263 files changed, 8676 insertions(+), 21754 deletions(-)
 delete mode 100644 .claude/skills/prisma-cli/SKILL.md
 delete mode 100644 .claude/skills/prisma-cli/references/agent-safety.md
 delete mode 100644 .claude/skills/prisma-cli/references/complete.md
 delete mode 100644 .claude/skills/prisma-cli/references/db-execute.md
 delete mode 100644 .claude/skills/prisma-cli/references/db-pull.md
 delete mode 100644 .claude/skills/prisma-cli/references/db-push.md
 delete mode 100644 .claude/skills/prisma-cli/references/db-seed.md
 delete mode 100644 .claude/skills/prisma-cli/references/debug.md
 delete mode 100644 .claude/skills/prisma-cli/references/dev.md
 delete mode 100644 .claude/skills/prisma-cli/references/format.md
 delete mode 100644 .claude/skills/prisma-cli/references/generate.md
 delete mode 100644 .claude/skills/prisma-cli/references/init.md
 delete mode 100644 .claude/skills/prisma-cli/references/mcp.md
 delete mode 100644 .claude/skills/prisma-cli/references/migrate-deploy.md
 delete mode 100644 .claude/skills/prisma-cli/references/migrate-dev.md
 delete mode 100644 .claude/skills/prisma-cli/references/migrate-diff.md
 delete mode 100644 .claude/skills/prisma-cli/references/migrate-reset.md
 delete mode 100644 .claude/skills/prisma-cli/references/migrate-resolve.md
 delete mode 100644 .claude/skills/prisma-cli/references/migrate-status.md
 delete mode 100644 .claude/skills/prisma-cli/references/studio.md
 delete mode 100644 .claude/skills/prisma-cli/references/validate.md
 delete mode 100644 .claude/skills/prisma-client-api/SKILL.md
 delete mode 100644 .claude/skills/prisma-client-api/references/client-methods.md
 delete mode 100644 .claude/skills/prisma-client-api/references/constructor.md
 delete mode 100644 .claude/skills/prisma-client-api/references/filters.md
 delete mode 100644 .claude/skills/prisma-client-api/references/model-queries.md
 delete mode 100644 .claude/skills/prisma-client-api/references/query-options.md
 delete mode 100644 .claude/skills/prisma-client-api/references/raw-queries.md
 delete mode 100644 .claude/skills/prisma-client-api/references/relations.md
 delete mode 100644 .claude/skills/prisma-client-api/references/transactions.md
 delete mode 100644 .claude/skills/prisma-compute/SKILL.md
 delete mode 100644 .claude/skills/prisma-compute/references/app-deploy-cli.md
 delete mode 100644 .claude/skills/prisma-compute/references/compute-config.md
 delete mode 100644 .claude/skills/prisma-compute/references/create-prisma.md
 delete mode 100644 .claude/skills/prisma-compute/references/frameworks.md
 delete mode 100644 .claude/skills/prisma-compute/references/sdk-api.md
 delete mode 100644 .claude/skills/prisma-compute/references/troubleshooting.md
 delete mode 100644 .claude/skills/prisma-database-setup/SKILL.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/cockroachdb.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/mongodb.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/mysql.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/postgresql.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/prisma-client-setup.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/prisma-postgres.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/sqlite.md
 delete mode 100644 .claude/skills/prisma-database-setup/references/sqlserver.md
 delete mode 100644 .claude/skills/prisma-driver-adapter-implementation/SKILL.md
 delete mode 100644 .claude/skills/prisma-mongodb-upgrade/SKILL.md
 delete mode 100644 .claude/skills/prisma-mongodb-upgrade/references/client-api-mapping.md
 delete mode 100644 .claude/skills/prisma-mongodb-upgrade/references/decision-stay-or-migrate.md
 delete mode 100644 .claude/skills/prisma-mongodb-upgrade/references/migrations-mapping.md
 delete mode 100644 .claude/skills/prisma-mongodb-upgrade/references/schema-contract-mapping.md
 delete mode 100644 .claude/skills/prisma-mongodb-upgrade/references/verify-cutover-checklist.md
 delete mode 100644 .claude/skills/prisma-postgres-setup/SKILL.md
 delete mode 100644 .claude/skills/prisma-postgres-setup/references/api-basics.md
 delete mode 100644 .claude/skills/prisma-postgres-setup/references/auth.md
 delete mode 100644 .claude/skills/prisma-postgres-setup/references/endpoints.md
 delete mode 100644 .claude/skills/prisma-postgres-setup/references/prisma7-client.md
 delete mode 100644 .claude/skills/prisma-postgres/SKILL.md
 delete mode 100644 .claude/skills/prisma-postgres/references/console-and-connections.md
 delete mode 100644 .claude/skills/prisma-postgres/references/create-db-cli.md
 delete mode 100644 .claude/skills/prisma-postgres/references/management-api-sdk.md
 delete mode 100644 .claude/skills/prisma-postgres/references/management-api.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/SKILL.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/accelerate-users.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/driver-adapters.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/env-variables.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/esm-support.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/prisma-config.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/removed-features.md
 delete mode 100644 .claude/skills/prisma-upgrade-v7/references/schema-changes.md
 rename shelf_backend/.dockerignore => .dockerignore (56%)
 create mode 100644 .github/workflows/deploy.yml
 rename shelf_backend/.prettierrc => .prettierrc (100%)
 delete mode 100644 .windsurf/skills/prisma-cli/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/agent-safety.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/complete.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/db-execute.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/db-pull.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/db-push.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/db-seed.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/debug.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/dev.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/format.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/generate.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/init.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/mcp.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/migrate-deploy.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/migrate-dev.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/migrate-diff.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/migrate-reset.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/migrate-resolve.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/migrate-status.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/studio.md
 delete mode 100644 .windsurf/skills/prisma-cli/references/validate.md
 delete mode 100644 .windsurf/skills/prisma-client-api/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/client-methods.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/constructor.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/filters.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/model-queries.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/query-options.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/raw-queries.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/relations.md
 delete mode 100644 .windsurf/skills/prisma-client-api/references/transactions.md
 delete mode 100644 .windsurf/skills/prisma-compute/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-compute/references/app-deploy-cli.md
 delete mode 100644 .windsurf/skills/prisma-compute/references/compute-config.md
 delete mode 100644 .windsurf/skills/prisma-compute/references/create-prisma.md
 delete mode 100644 .windsurf/skills/prisma-compute/references/frameworks.md
 delete mode 100644 .windsurf/skills/prisma-compute/references/sdk-api.md
 delete mode 100644 .windsurf/skills/prisma-compute/references/troubleshooting.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/cockroachdb.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/mongodb.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/mysql.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/postgresql.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/prisma-client-setup.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/prisma-postgres.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/sqlite.md
 delete mode 100644 .windsurf/skills/prisma-database-setup/references/sqlserver.md
 delete mode 100644 .windsurf/skills/prisma-driver-adapter-implementation/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-mongodb-upgrade/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-mongodb-upgrade/references/client-api-mapping.md
 delete mode 100644 .windsurf/skills/prisma-mongodb-upgrade/references/decision-stay-or-migrate.md
 delete mode 100644 .windsurf/skills/prisma-mongodb-upgrade/references/migrations-mapping.md
 delete mode 100644 .windsurf/skills/prisma-mongodb-upgrade/references/schema-contract-mapping.md
 delete mode 100644 .windsurf/skills/prisma-mongodb-upgrade/references/verify-cutover-checklist.md
 delete mode 100644 .windsurf/skills/prisma-postgres-setup/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-postgres-setup/references/api-basics.md
 delete mode 100644 .windsurf/skills/prisma-postgres-setup/references/auth.md
 delete mode 100644 .windsurf/skills/prisma-postgres-setup/references/endpoints.md
 delete mode 100644 .windsurf/skills/prisma-postgres-setup/references/prisma7-client.md
 delete mode 100644 .windsurf/skills/prisma-postgres/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-postgres/references/console-and-connections.md
 delete mode 100644 .windsurf/skills/prisma-postgres/references/create-db-cli.md
 delete mode 100644 .windsurf/skills/prisma-postgres/references/management-api-sdk.md
 delete mode 100644 .windsurf/skills/prisma-postgres/references/management-api.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/SKILL.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/accelerate-users.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/driver-adapters.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/env-variables.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/esm-support.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/prisma-config.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/removed-features.md
 delete mode 100644 .windsurf/skills/prisma-upgrade-v7/references/schema-changes.md
 rename {shelf_backend/docs => docs}/API.md (100%)
 create mode 100644 docs/AWS.md
 rename {shelf_backend/docs => docs}/ERROR.md (100%)
 create mode 100644 docs/LEARN.md
 rename {shelf_backend/docs => docs}/TRACK.md (100%)
 rename shelf_backend/eslint.config.mjs => eslint.config.mjs (100%)
 create mode 100644 generated/prisma/browser.d.ts
 create mode 100644 generated/prisma/browser.js
 create mode 100644 generated/prisma/browser.js.map
 rename {shelf_backend/generated => generated}/prisma/browser.ts (100%)
 create mode 100644 generated/prisma/client.d.ts
 create mode 100644 generated/prisma/client.js
 create mode 100644 generated/prisma/client.js.map
 rename {shelf_backend/generated => generated}/prisma/client.ts (100%)
 create mode 100644 generated/prisma/commonInputTypes.d.ts
 create mode 100644 generated/prisma/commonInputTypes.js
 create mode 100644 generated/prisma/commonInputTypes.js.map
 rename {shelf_backend/generated => generated}/prisma/commonInputTypes.ts (100%)
 create mode 100644 generated/prisma/enums.d.ts
 create mode 100644 generated/prisma/enums.js
 create mode 100644 generated/prisma/enums.js.map
 rename {shelf_backend/generated => generated}/prisma/enums.ts (100%)
 create mode 100644 generated/prisma/internal/class.d.ts
 create mode 100644 generated/prisma/internal/class.js
 create mode 100644 generated/prisma/internal/class.js.map
 rename {shelf_backend/generated => generated}/prisma/internal/class.ts (100%)
 create mode 100644 generated/prisma/internal/prismaNamespace.d.ts
 create mode 100644 generated/prisma/internal/prismaNamespace.js
 create mode 100644 generated/prisma/internal/prismaNamespace.js.map
 rename {shelf_backend/generated => generated}/prisma/internal/prismaNamespace.ts (100%)
 create mode 100644 generated/prisma/internal/prismaNamespaceBrowser.d.ts
 create mode 100644 generated/prisma/internal/prismaNamespaceBrowser.js
 create mode 100644 generated/prisma/internal/prismaNamespaceBrowser.js.map
 rename {shelf_backend/generated => generated}/prisma/internal/prismaNamespaceBrowser.ts (100%)
 create mode 100644 generated/prisma/models.d.ts
 create mode 100644 generated/prisma/models.js
 create mode 100644 generated/prisma/models.js.map
 rename {shelf_backend/generated => generated}/prisma/models.ts (100%)
 create mode 100644 generated/prisma/models/Attachment.d.ts
 create mode 100644 generated/prisma/models/Attachment.js
 create mode 100644 generated/prisma/models/Attachment.js.map
 rename {shelf_backend/generated => generated}/prisma/models/Attachment.ts (100%)
 create mode 100644 generated/prisma/models/Document.d.ts
 create mode 100644 generated/prisma/models/Document.js
 create mode 100644 generated/prisma/models/Document.js.map
 rename {shelf_backend/generated => generated}/prisma/models/Document.ts (100%)
 create mode 100644 generated/prisma/models/Session.d.ts
 create mode 100644 generated/prisma/models/Session.js
 create mode 100644 generated/prisma/models/Session.js.map
 rename {shelf_backend/generated => generated}/prisma/models/Session.ts (100%)
 create mode 100644 generated/prisma/models/Tag.d.ts
 create mode 100644 generated/prisma/models/Tag.js
 create mode 100644 generated/prisma/models/Tag.js.map
 rename {shelf_backend/generated => generated}/prisma/models/Tag.ts (100%)
 create mode 100644 generated/prisma/models/TagsOnDocs.d.ts
 create mode 100644 generated/prisma/models/TagsOnDocs.js
 create mode 100644 generated/prisma/models/TagsOnDocs.js.map
 rename {shelf_backend/generated => generated}/prisma/models/TagsOnDocs.ts (100%)
 create mode 100644 generated/prisma/models/User.d.ts
 create mode 100644 generated/prisma/models/User.js
 create mode 100644 generated/prisma/models/User.js.map
 rename {shelf_backend/generated => generated}/prisma/models/User.ts (100%)
 rename shelf_backend/nest-cli.json => nest-cli.json (100%)
 rename shelf_backend/package-lock.json => package-lock.json (100%)
 rename shelf_backend/package.json => package.json (100%)
 create mode 100644 prisma.config.d.ts
 create mode 100644 prisma.config.js
 create mode 100644 prisma.config.js.map
 rename shelf_backend/prisma.config.ts => prisma.config.ts (100%)
 rename {shelf_backend/prisma => prisma}/migrations/20260808102347_init/migration.sql (100%)
 rename {shelf_backend/prisma => prisma}/migrations/20260809134902_update_session_model/migration.sql (100%)
 rename {shelf_backend/prisma => prisma}/migrations/migration_lock.toml (100%)
 rename {shelf_backend/prisma => prisma}/schema.prisma (100%)
 delete mode 100644 shelf_backend/README.md
 rename shelf_backend/skills-lock.json => skills-lock.json (100%)
 rename {shelf_backend/src => src}/app.controller.spec.ts (100%)
 rename {shelf_backend/src => src}/app.controller.ts (100%)
 rename {shelf_backend/src => src}/app.module.ts (100%)
 rename {shelf_backend/src => src}/app.service.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.constants.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.controller.spec.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.controller.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.dto.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.guard.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.hashing.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.module.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.service.spec.ts (100%)
 rename {shelf_backend/src => src}/auth/auth.service.ts (100%)
 rename {shelf_backend/src => src}/common/app-base.error.ts (100%)
 rename {shelf_backend/src => src}/common/errors/errors-class.error.ts (100%)
 rename {shelf_backend/src => src}/common/errors/exception-mapping.ts (100%)
 rename {shelf_backend/src => src}/common/errors/global-exception.filter.ts (100%)
 rename {shelf_backend/src => src}/common/schemas/schema.zod.ts (100%)
 rename {shelf_backend/src => src}/common/schemas/zod.schema.ts (100%)
 rename {shelf_backend/src => src}/docs/docs.controller.spec.ts (100%)
 rename {shelf_backend/src => src}/docs/docs.controller.ts (100%)
 rename {shelf_backend/src => src}/docs/docs.module.ts (100%)
 rename {shelf_backend/src => src}/docs/docs.service.spec.ts (100%)
 rename {shelf_backend/src => src}/docs/docs.service.ts (100%)
 rename {shelf_backend/src => src}/health/health.controller.spec.ts (100%)
 rename {shelf_backend/src => src}/health/health.controller.ts (100%)
 rename {shelf_backend/src => src}/health/health.module.ts (100%)
 rename {shelf_backend/src => src}/health/health.service.spec.ts (100%)
 rename {shelf_backend/src => src}/health/health.service.ts (100%)
 rename {shelf_backend/src => src}/main.ts (100%)
 rename {shelf_backend/src => src}/prisma.service.ts (100%)
 rename {shelf_backend/src => src}/users/users.controller.spec.ts (100%)
 rename {shelf_backend/src => src}/users/users.controller.ts (100%)
 rename {shelf_backend/src => src}/users/users.dto.ts (100%)
 rename {shelf_backend/src => src}/users/users.module.ts (100%)
 rename {shelf_backend/src => src}/users/users.service.spec.ts (100%)
 rename {shelf_backend/src => src}/users/users.service.ts (100%)
 rename {shelf_backend/test => test}/app.e2e-spec.ts (100%)
 rename {shelf_backend/test => test}/jest-e2e.json (100%)
 rename shelf_backend/tsconfig.build.json => tsconfig.build.json (100%)
 rename shelf_backend/tsconfig.json => tsconfig.json (82%)
PS C:\My_Projects\ShelfAPI-backend> docker build -t shelfapi-backend:655f609 .
[+] Building 3.1s (18/18) FINISHED                                                                                                      docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                    0.0s
 => => transferring dockerfile: 798B                                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                       2.3s
 => [internal] load .dockerignore                                                                                                                       0.1s
 => => transferring context: 111B                                                                                                                       0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                         0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                 0.1s
 => [internal] load build context                                                                                                                       0.1s
 => => transferring context: 15.31kB                                                                                                                    0.1s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                   0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                        0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                          0.0s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                       0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                     0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                           0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                        0.0s
 => CACHED [builder 8/9] COPY . .                                                                                                                       0.0s
 => CACHED [builder 9/9] RUN npm run build                                                                                                              0.0s
 => CACHED [production 6/8] COPY --from=builder /app/dist ./dist                                                                                        0.0s
 => CACHED [production 7/8] COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma                                                        0.0s
 => CACHED [production 8/8] COPY prisma ./prisma                                                                                                        0.0s
 => exporting to image                                                                                                                                  0.3s
 => => exporting layers                                                                                                                                 0.0s
 => => exporting manifest sha256:d005ba58bdb7fda464fddfe89eb33d50d1e2f13855f6226ee58d8986619fe7f9                                                       0.0s
 => => exporting config sha256:83cc6f4522c9cc50b7e5a137bf3eaeeea9bfcd0971ef32bde5635778efa74246                                                         0.0s
 => => exporting attestation manifest sha256:5ae72f9b6d4555cc9bb49ef6af7e29f0d0c2a52e7d8487371f3a86c7bfe6d6e4                                           0.1s
 => => exporting manifest list sha256:0863d438b8ad79a9e05e5faa1ef01183964bd90d36995435346f6273ca439eb0                                                  0.0s
 => => naming to docker.io/library/shelfapi-backend:655f609                                                                                             0.0s
 => => unpacking to docker.io/library/shelfapi-backend:655f609                                                                                          0.0s
PS C:\My_Projects\ShelfAPI-backend> docker tag shelfapi-backend:b72d91e 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
Error response from daemon: No such image: shelfapi-backend:b72d91e
PS C:\My_Projects\ShelfAPI-backend> docker tag shelfapi-backend:655f609 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
PS C:\My_Projects\ShelfAPI-backend> aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
Login Succeeded
PS C:\My_Projects\ShelfAPI-backend> docker push 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609
The push refers to repository [311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend]
fff4e2c1b189: Layer already exists 
0dc6dcd1e2cf: Layer already exists 
6a1b2e388398: Layer already exists 
e9bcf3e7fc8e: Layer already exists 
4feea04c1543: Layer already exists 
2ea9c899dbc1: Layer already exists 
38c70116a9e2: Layer already exists 
6fd88e7aae1d: Layer already exists 
6a0ac1617861: Layer already exists 
b2cbbfe903b0: Layer already exists 
cd32c6d51a4d: Pushed 
e0602ab3ff19: Layer already exists 
655f609: digest: sha256:0863d438b8ad79a9e05e5faa1ef01183964bd90d36995435346f6273ca439eb0 size: 856
PS C:\My_Projects\ShelfAPI-backend> Get-Content src\docs\docs.module.ts
import { Module } from '@nestjs/common';
import { DocsController } from './docs.controller';
import { DocsService } from './docs.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DocsController],
  providers: [DocsService, PrismaService, JwtService]
})
export class DocsModule {}
PS C:\My_Projects\ShelfAPI-backend> Get-Content src\docs\docs.service.ts
import { Injectable } from '@nestjs/common';
import {
  addDocumentDto,
  updateDocumentDto,
} from '../common/schemas/schema.zod';
import { PrismaService } from '../prisma.service';
import { FileMissing } from '../common/errors/errors-class.error';
import { randomUUID } from 'crypto';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

type UploadAttachmentInput = {
  userId: string;
  docId: string;
  file: Express.Multer.File
}

@Injectable()
export class DocsService {
  constructor(private readonly prisma: PrismaService, private readonly s3: S3Client) {}
  async findAllDocuments() {}

  async addDocument(addDocumentDto: addDocumentDto, userId: string) {
    await this.prisma.document.create({
      data: {
        title: addDocumentDto.title,
        description: addDocumentDto.description,
        user_id: userId,
        tags: {
          create: addDocumentDto.tags?.map((name) => ({
            tag: {
              connectOrCreate: {
                where: {
                  user_id_name: {
                    user_id: userId,
                    name,
                  },
                },
                create: {
                  user_id: userId,
                  name,
                },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async deleteAllDocs(userId: string) {
    await this.prisma.document.deleteMany({
      where: { user_id: userId },
    });
  }

  async getOneDocument(docId: string, userId: string) {
    return await this.prisma.document.findUnique({
      where: { id: docId, user_id: userId },
    });
  }

  async updateOneDoc(docId: string, userId: string, data: updateDocumentDto) {
    await this.prisma.document.update({
      where: { id: docId },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && {
          description: data.description,
        }),
        ...(data.tags !== undefined && {
          tags: {
            deleteMany: {},
            create: data.tags.map((tagName) => ({
              tag: {
                connectOrCreate: {
                  where: {
                    user_id_name: {
                      user_id: userId,
                      name: tagName,
                    },
                  },
                  create: {
                    user_id: userId,
                    name: tagName,
                  },
                },
              },
            })),
          },
        }),
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async deleteOneDoc(docId: string, userId: string) {
    await this.prisma.document.delete({
      where: { id: docId, user_id: userId },
    });
  }

  async uploadAttachment({ userId, docId, file }: UploadAttachmentInput) {
    const doc = await this.prisma.document.findUnique({
      where: {
        id: docId,
        user_id: userId,
      }
    });

    if (!doc) throw new FileMissing();

    const ext = file.originalname.includes('.') ? file.originalname.split('.').pop() : 'bin';

    const key = `users/${userId}/docs/${docId}/${randomUUID()}.{ext}`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype
      })
    );

    return this.prisma.attachment.create({
      data: {
        doc_id: docId,
        s3_key: key,
        folder: '/uploads',
        original_filename: file.originalname,
        mime_type: file.mimetype,
        size_bytes: file.size
      }
    })
  }
}
PS C:\My_Projects\ShelfAPI-backend> Get-ChildItem -Path src -Recurse -Filter *.ts | Select-String "S3Client"

src\docs\docs.service.ts:9:import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
src\docs\docs.service.ts:19:  constructor(private readonly prisma: PrismaService, private readonly s3: S3Client) {}


PS C:\My_Projects\ShelfAPI-backend> Get-ChildItem -Path src -Recurse -Filter *.ts | Select-String "S3|AWS|S3Module|provide:"

src\docs\docs.service.ts:9:import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
src\docs\docs.service.ts:19:  constructor(private readonly prisma: PrismaService, private readonly s3: S3Client) {}
src\docs\docs.service.ts:129:    await this.s3.send(
src\docs\docs.service.ts:131:        Bucket: process.env.S3_BUCKET!,
src\docs\docs.service.ts:141:        s3_key: key,


PS C:\My_Projects\ShelfAPI-backend> npx tsc --noEmit
npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system. For more 
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ npx tsc --noEmit
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\My_Projects\ShelfAPI-backend> Get-Content Dockerfile
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

# Same build tools needed here too â€” this stage does its own separate npm ci
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY prisma ./prisma

EXPOSE 3000

CMD ["node", "dist/main.js"]

PS C:\My_Projects\ShelfAPI-backend> Get-Content package.json
{
  "name": "ShelfAPI",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.1107.0",
    "@aws-sdk/s3-request-presigner": "^3.1107.0",
    "@nestjs/common": "^11.0.1",
    "@nestjs/config": "^4.0.4",
    "@nestjs/core": "^11.0.1",
    "@nestjs/jwt": "^11.0.2",
    "@nestjs/platform-express": "^11.0.1",
    "@prisma/adapter-pg": "^7.9.1",
    "@prisma/client": "^7.9.1",
    "argon2": "^0.45.1",
    "aws-sdk": "^2.1693.0",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.15.1",
    "cookie-parser": "^1.4.7",
    "pg": "^8.22.0",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.0",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@types/cookie-parser": "^1.4.10",
    "@types/express": "^5.0.0",
    "@types/jest": "^30.0.0",
    "@types/multer": "^2.2.0",
    "@types/node": "^24.13.3",
    "@types/supertest": "^7.0.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^17.0.0",
    "jest": "^30.0.0",
    "prettier": "^3.4.2",
    "prisma": "^7.9.1",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
PS C:\My_Projects\ShelfAPI-backend> git status
warning: could not open directory '.claude/skills/prisma-cli/': No such file or directory
warning: could not open directory '.claude/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.claude/skills/prisma-compute/': No such file or directory
warning: could not open directory '.claude/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.claude/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-upgrade-v7/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-cli/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-compute/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-upgrade-v7/': No such file or directory
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\My_Projects\ShelfAPI-backend> git log -1 --oneline
6eee52c (HEAD -> main) fix: register S3 client in docs module
PS C:\My_Projects\ShelfAPI-backend> Get-Content src\app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DocsModule } from './docs/docs.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DocsService } from './docs/docs.service';
import { DocsController } from './docs/docs.controller';

@Module({
  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
  controllers: [AppController, AuthController, UsersController, DocsController],
  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
})
export class AppModule {}
PS C:\My_Projects\ShelfAPI-backend> Get-ChildItem -Path src -Recurse -Filter *.ts | Select-String "DocsService"

src\app.module.ts:15:import { DocsService } from './docs/docs.service';
src\app.module.ts:21:  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
src\docs\docs.controller.ts:14:import { DocsService } from './docs.service';
src\docs\docs.controller.ts:36:  constructor(private docsService: DocsService) {}
src\docs\docs.controller.ts:47:    await this.docsService.addDocument(data, userId);
src\docs\docs.controller.ts:60:    await this.docsService.deleteAllDocs(userId);
src\docs\docs.controller.ts:74:    return await this.docsService.getOneDocument(docId, userId);
src\docs\docs.controller.ts:87:    return await this.docsService.updateOneDoc(docId, userId, data);
src\docs\docs.controller.ts:99:    await this.docsService.deleteOneDoc(docId, userId);
src\docs\docs.controller.ts:119:    const attachment = await this.docsService.uploadAttachment({
src\docs\docs.module.ts:3:import { DocsService } from './docs.service';
src\docs\docs.module.ts:11:    DocsService,
src\docs\docs.service.spec.ts:2:import { DocsService } from './docs.service';
src\docs\docs.service.spec.ts:4:describe('DocsService', () => {
src\docs\docs.service.spec.ts:5:  let service: DocsService;
src\docs\docs.service.spec.ts:9:      providers: [DocsService],
src\docs\docs.service.spec.ts:12:    service = module.get<DocsService>(DocsService);
src\docs\docs.service.ts:18:export class DocsService {


PS C:\My_Projects\ShelfAPI-backend> Get-ChildItem -Path src -Recurse -Filter *.ts | Select-String "providers:.*DocsService|DocsService,"

src\docs\docs.module.ts:11:    DocsService,
src\docs\docs.service.spec.ts:9:      providers: [DocsService],


PS C:\My_Projects\ShelfAPI-backend> Get-ChildItem -Path src -Recurse -Filter *.ts | Select-String "DocsController"

src\docs\docs.controller.spec.ts:2:import { DocsController } from './docs.controller';
src\docs\docs.controller.spec.ts:4:describe('DocsController', () => {
src\docs\docs.controller.spec.ts:5:  let controller: DocsController;
src\docs\docs.controller.spec.ts:9:      controllers: [DocsController],
src\docs\docs.controller.spec.ts:12:    controller = module.get<DocsController>(DocsController);
src\docs\docs.controller.ts:35:export class DocsController {
src\docs\docs.module.ts:2:import { DocsController } from './docs.controller';
src\docs\docs.module.ts:9:  controllers: [DocsController],


PS C:\My_Projects\ShelfAPI-backend> Get-Content src\app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DocsModule } from './docs/docs.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    DocsModule,
    HealthModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
PS C:\My_Projects\ShelfAPI-backend> Get-Content dist\app.module.js | Select-String "DocsService|DocsController"
PS C:\My_Projects\ShelfAPI-backend> git status
warning: could not open directory '.claude/skills/prisma-cli/': No such file or directory
warning: could not open directory '.claude/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.claude/skills/prisma-compute/': No such file or directory
warning: could not open directory '.claude/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.claude/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-upgrade-v7/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-cli/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-compute/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-upgrade-v7/': No such file or directory
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/app.module.ts

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\My_Projects\ShelfAPI-backend> git diff -- src/app.module.ts
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..40e5fc3 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -5,19 +5,17 @@ import { UsersModule } from './users/users.module';
 import { DocsModule } from './docs/docs.module';
 import { HealthModule } from './health/health.module';
 import { AuthModule } from './auth/auth.module';
-import { AuthController } from './auth/auth.controller';
-import { UsersController } from './users/users.controller';
-import { UsersService } from './users/users.service';
-import { AuthService } from './auth/auth.service';
-import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
-import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
PS C:\My_Projects\ShelfAPI-backend> git add src/app.module.ts
PS C:\My_Projects\ShelfAPI-backend> git commit -m "fix: remove duplicate docs service registration"
[main a002af3] fix: remove duplicate docs service registration
 1 file changed, 10 insertions(+), 12 deletions(-)
PS C:\My_Projects\ShelfAPI-backend> git log -1 --oneline
a002af3 (HEAD -> main) fix: remove duplicate docs service registration
PS C:\My_Projects\ShelfAPI-backend> docker build -t shelfapi-backend:a002af3 .
[+] Building 18.8s (18/18) FINISHED                                                                                                     docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                    0.0s
 => => transferring dockerfile: 798B                                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                       2.1s
 => [internal] load .dockerignore                                                                                                                       0.0s
 => => transferring context: 111B                                                                                                                       0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                         0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                 0.1s
 => [internal] load build context                                                                                                                       0.1s
 => => transferring context: 720.04kB                                                                                                                   0.1s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                   0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                        0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                          0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                     0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                           0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                        0.0s
 => [builder 8/9] COPY . .                                                                                                                              0.2s
 => [builder 9/9] RUN npm run build                                                                                                                    10.5s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                       0.0s
 => [production 6/8] COPY --from=builder /app/dist ./dist                                                                                               0.1s
 => [production 7/8] COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma                                                               0.2s
 => [production 8/8] COPY prisma ./prisma                                                                                                               0.1s
 => exporting to image                                                                                                                                  1.2s
 => => exporting layers                                                                                                                                 0.6s
 => => exporting manifest sha256:63b7de96d12d0b0d2b3492415d72f22a7bc56d172508ec5f03ae0ea62262d588                                                       0.0s
 => => exporting config sha256:2d2aa3c203ff14f8afcbccdbdf0dbb63158fb1d33d1b410956eccabd6bc834d6                                                         0.0s
 => => exporting attestation manifest sha256:6321681e73b474f5f10f267c91c0d086380a68af46163aae845085ebb83ecc76                                           0.1s
 => => exporting manifest list sha256:1150e9bba46a04f26df3b1b908a9467b0ebb20dfac62df34f14563e860f30690                                                  0.0s
 => => naming to docker.io/library/shelfapi-backend:a002af3                                                                                             0.0s
 => => unpacking to docker.io/library/shelfapi-backend:a002af3                                                                                          0.2s
PS C:\My_Projects\ShelfAPI-backend> docker images shelfapi-backend
                                                                                                                                         i Info →   U  In Use
IMAGE                      ID             DISK USAGE   CONTENT SIZE   EXTRA
shelfapi-backend:655f609   0863d438b8ad       1.72GB          425MB        
shelfapi-backend:6eee52c   fac179c38fdc       1.72GB          425MB        
shelfapi-backend:a002af3   1150e9bba46a       1.72GB          425MB        
PS C:\My_Projects\ShelfAPI-backend> docker tag shelfapi-backend:a002af3 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3
PS C:\My_Projects\ShelfAPI-backend> aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
Login Succeeded
PS C:\My_Projects\ShelfAPI-backend> docker push 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a002af3
The push refers to repository [311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend]
6a1b2e388398: Layer already exists 
4feea04c1543: Layer already exists 
b2cbbfe903b0: Layer already exists 
fff4e2c1b189: Layer already exists 
1b2efcd69535: Pushed 
1cb68992bb1c: Pushed 
ee469e6a9acd: Pushed 
6fd88e7aae1d: Layer already exists 
2ea9c899dbc1: Layer already exists 
38c70116a9e2: Layer already exists 
313ce4ca3fc6: Pushed 
6a0ac1617861: Layer already exists 
a002af3: digest: sha256:1150e9bba46a04f26df3b1b908a9467b0ebb20dfac62df34f14563e860f30690 size: 856
PS C:\My_Projects\ShelfAPI-backend> 

----

 0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.0s
 => [internal] load .dockerignore                                                                                                                             0.0s
 => => transferring context: 111B                                                                                                                             0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                               0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [internal] load build context                                                                                                                             0.1s
 => => transferring context: 12.74kB                                                                                                                          0.0s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                         0.0s
 => [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                                    18.7s
 => [builder 4/9] COPY package*.json ./                                                                                                                       0.2s 
 => [builder 5/9] RUN npm ci                                                                                                                                 71.0s 
 => [production 5/8] RUN npm ci --omit=dev                                                                                                                   64.8s 
 => [builder 6/9] COPY prisma ./prisma                                                                                                                        0.9s 
 => [builder 7/9] RUN npx prisma generate                                                                                                                     2.9s 
 => [builder 8/9] COPY . .                                                                                                                                    0.2s 
 => ERROR [builder 9/9] RUN npm run build                                                                                                                     8.0s 
------
 > [builder 9/9] RUN npm run build:
0.571 
0.571 > ShelfAPI@0.0.1 build
0.571 > nest build
0.571 
7.833 error TS2688: Cannot find type definition file for 'Multer'.
7.833   The file is in the program because:
7.833     Entry point of type library 'Multer' specified in compilerOptions
7.833 src/docs/docs.controller.ts:112:35 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
7.833 
7.833 112     @UploadedFile() file: Express.Multer.File,
7.833                                       ~~~~~~
7.833 src/docs/docs.service.ts:14:17 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
7.833 
7.833 14   file: Express.Multer.File
7.833                    ~~~~~~
7.833 
7.838 Found 3 error(s).
7.838 
------
Dockerfile:17
--------------------
  15 |     
  16 |     COPY . .
  17 | >>> RUN npm run build
  18 |     
  19 |     # --- Stage 2: Production runtime ---
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1

What's next:
    Debug this build failure with Gordon → docker ai "help me fix this build failure"

C:\My_Projects\ShelfAPI-backend>npm install -D @types/multer

up to date, audited 925 packages in 14s

177 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (2 moderate, 3 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
npm notice
npm notice New minor version of npm available! 11.9.0 -> 11.19.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.19.0
npm notice To update run: npm install -g npm@11.19.0
npm notice

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
[+] Building 11.1s (14/17)                                                                                                                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                          0.1s
 => => transferring dockerfile: 798B                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.1s
 => [internal] load .dockerignore                                                                                                                             0.0s
 => => transferring context: 111B                                                                                                                             0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                               0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [internal] load build context                                                                                                                             0.2s
 => => transferring context: 496.81kB                                                                                                                         0.1s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                         0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                              0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                                0.0s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                             0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                           0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                                 0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                              0.0s
 => [builder 8/9] COPY . .                                                                                                                                    0.2s
 => ERROR [builder 9/9] RUN npm run build                                                                                                                     8.2s
------                                                                                                                                                             
 > [builder 9/9] RUN npm run build:                                                                                                                                
0.629                                                                                                                                                              
0.629 > ShelfAPI@0.0.1 build                                                                                                                                       
0.629 > nest build                                                                                                                                                 
0.629                                                                                                                                                              
8.046 src/docs/docs.controller.ts:112:35 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
8.046 
8.046 112     @UploadedFile() file: Express.Multer.File,
8.046                                       ~~~~~~
8.046 src/docs/docs.service.ts:14:17 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
8.046 
8.046 14   file: Express.Multer.File
8.046                    ~~~~~~
8.046 
8.052 Found 2 error(s).
8.052 
------
Dockerfile:17
--------------------
  15 |     
  16 |     COPY . .
  17 | >>> RUN npm run build
  18 |     
  19 |     # --- Stage 2: Production runtime ---
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1

What's next:
    Debug this build failure with Gordon → docker ai "help me fix this build failure"

C:\My_Projects\ShelfAPI-backend>npx tsc --noEmit
src/docs/docs.controller.ts:112:35 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.

112     @UploadedFile() file: Express.Multer.File,
                                      ~~~~~~

src/docs/docs.service.ts:14:17 - error TS2694: Namespace 'global.Express' has no exported member 'Multer'.

14   file: Express.Multer.File
                   ~~~~~~


Found 2 errors in 2 files.

Errors  Files
     1  src/docs/docs.controller.ts:112
     1  src/docs/docs.service.ts:14

C:\My_Projects\ShelfAPI-backend>npm ls @types/express @types/multer multer
ShelfAPI@0.0.1 C:\My_Projects\ShelfAPI-backend
├─┬ @nestjs/platform-express@11.1.28
│ └── multer@2.2.0
├─┬ @types/cookie-parser@1.4.10
│ └── @types/express@5.0.6 deduped
├── @types/express@5.0.6
└─┬ @types/multer@2.2.0
  └── @types/express@5.0.6 deduped


C:\My_Projects\ShelfAPI-backend>npm ls express
ShelfAPI@0.0.1 C:\My_Projects\ShelfAPI-backend
└─┬ @nestjs/platform-express@11.1.28
  └── express@5.2.1


C:\My_Projects\ShelfAPI-backend>type tsconfig.json
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "types": ["node", "jest"],
    // "baseUrl": ".",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "noFallthroughCasesInSwitch": true,
    "strictPropertyInitialization": false
  }
}

C:\My_Projects\ShelfAPI-backend>npm ls @types/node typescript
ShelfAPI@0.0.1 C:\My_Projects\ShelfAPI-backend
├─┬ @nestjs/cli@11.0.24
│ ├─┬ @angular-devkit/schematics-cli@19.2.27
│ │ └─┬ @inquirer/prompts@7.3.2
│ │   └── @types/node@24.13.3 deduped
│ ├─┬ @inquirer/prompts@7.10.1
│ │ ├─┬ @inquirer/checkbox@4.3.2
│ │ │ ├─┬ @inquirer/core@10.3.2
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ ├─┬ @inquirer/type@3.0.10
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/confirm@5.1.21
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/editor@4.2.23
│ │ │ ├─┬ @inquirer/external-editor@1.0.3
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/expand@4.0.23
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/input@4.3.1
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/number@3.0.23
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/password@4.0.23
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/rawlist@4.1.11
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/search@3.2.2
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @inquirer/select@4.4.2
│ │ │ └── @types/node@24.13.3 deduped
│ │ └── @types/node@24.13.3 deduped
│ ├─┬ fork-ts-checker-webpack-plugin@9.1.0
│ │ ├─┬ cosmiconfig@8.3.6
│ │ │ └── typescript@5.9.3 deduped
│ │ └── typescript@5.9.3 deduped
│ ├── typescript@5.9.3 deduped
│ └─┬ webpack@5.106.2
│   └─┬ terser-webpack-plugin@5.6.1
│     └─┬ jest-worker@27.5.1
│       └── @types/node@24.13.3 deduped
├─┬ @nestjs/jwt@11.0.2
│ └─┬ @types/jsonwebtoken@9.0.10
│   └── @types/node@24.13.3 deduped
├─┬ @nestjs/schematics@11.1.0
│ └── typescript@5.9.3 deduped
├─┬ @prisma/adapter-pg@7.9.1
│ └─┬ @types/pg@8.21.0
│   └── @types/node@24.13.3 deduped
├─┬ @prisma/client@7.9.1
│ └── typescript@5.9.3 deduped
├─┬ @types/express@5.0.6
│ ├─┬ @types/body-parser@1.19.6
│ │ ├─┬ @types/connect@3.4.38
│ │ │ └── @types/node@24.13.3 deduped
│ │ └── @types/node@24.13.3 deduped
│ ├─┬ @types/express-serve-static-core@5.1.3
│ │ ├── @types/node@24.13.3 deduped
│ │ └─┬ @types/send@1.2.1
│ │   └── @types/node@24.13.3 deduped
│ └─┬ @types/serve-static@2.2.0
│   └── @types/node@24.13.3 deduped
├─┬ @types/jest@30.0.0
│ └─┬ expect@30.4.1
│   └─┬ jest-mock@30.4.1
│     └── @types/node@24.13.3 deduped
├── @types/node@24.13.3
├─┬ @types/supertest@7.2.1
│ └─┬ @types/superagent@8.1.11
│   └── @types/node@24.13.3 deduped
├─┬ jest@30.4.2
│ ├─┬ @jest/core@30.4.2
│ │ ├─┬ @jest/console@30.4.1
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @jest/pattern@30.4.0
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ @jest/reporters@30.4.1
│ │ │ ├── @types/node@24.13.3 deduped
│ │ │ └─┬ jest-worker@30.4.1
│ │ │   └── @types/node@24.13.3 deduped
│ │ ├── @types/node@24.13.3 deduped
│ │ ├─┬ jest-config@30.4.2
│ │ │ ├── @types/node@24.13.3 deduped
│ │ │ ├─┬ jest-circus@30.4.2
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └─┬ jest-environment-node@30.4.1
│ │ │   └── @types/node@24.13.3 deduped
│ │ ├─┬ jest-haste-map@30.4.1
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ jest-runner@30.4.2
│ │ │ ├─┬ @jest/environment@30.4.1
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ ├─┬ jest-runtime@30.4.2
│ │ │ ├─┬ @jest/fake-timers@30.4.1
│ │ │ │ └── @types/node@24.13.3 deduped
│ │ │ └── @types/node@24.13.3 deduped
│ │ └─┬ jest-watcher@30.4.1
│ │   └── @types/node@24.13.3 deduped
│ └─┬ @jest/types@30.4.1
│   └── @types/node@24.13.3 deduped
├─┬ prisma@7.9.1
│ ├─┬ @prisma/dev@0.24.17
│ │ └─┬ valibot@1.4.2
│ │   └── typescript@5.9.3 deduped
│ └── typescript@5.9.3 deduped
├─┬ ts-jest@29.4.12
│ ├─┬ jest-util@30.4.1
│ │ └── @types/node@24.13.3 deduped
│ └── typescript@5.9.3 deduped
├─┬ ts-loader@9.6.2
│ ├── typescript@5.9.3 deduped
│ └─┬ webpack@5.109.2
│   └─┬ minimizer-webpack-plugin@5.6.1
│     └─┬ jest-worker@27.5.1
│       └── @types/node@24.13.3 deduped
├─┬ ts-node@10.9.2
│ ├── @types/node@24.13.3 deduped
│ └── typescript@5.9.3 deduped
├─┬ typescript-eslint@8.66.0
│ ├─┬ @typescript-eslint/eslint-plugin@8.66.0
│ │ ├─┬ @typescript-eslint/type-utils@8.66.0
│ │ │ └── typescript@5.9.3 deduped
│ │ ├─┬ ts-api-utils@2.5.0
│ │ │ └── typescript@5.9.3 deduped
│ │ └── typescript@5.9.3 deduped
│ ├─┬ @typescript-eslint/parser@8.66.0
│ │ └── typescript@5.9.3 deduped
│ ├─┬ @typescript-eslint/typescript-estree@8.66.0
│ │ ├─┬ @typescript-eslint/project-service@8.66.0
│ │ │ └── typescript@5.9.3 deduped
│ │ ├─┬ @typescript-eslint/tsconfig-utils@8.66.0
│ │ │ └── typescript@5.9.3 deduped
│ │ └── typescript@5.9.3 deduped
│ ├─┬ @typescript-eslint/utils@8.66.0
│ │ └── typescript@5.9.3 deduped
│ └── typescript@5.9.3 deduped
└── typescript@5.9.3


C:\My_Projects\ShelfAPI-backend>npx tsc --noEmit

C:\My_Projects\ShelfAPI-backend>docker build -t 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21 .
[+] Building 68.3s (18/18) FINISHED                                                                                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                          0.1s
 => => transferring dockerfile: 798B                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                             2.4s
 => [internal] load .dockerignore                                                                                                                             0.0s
 => => transferring context: 111B                                                                                                                             0.0s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                               0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                       0.1s
 => [internal] load build context                                                                                                                             0.1s
 => => transferring context: 13.54kB                                                                                                                          0.0s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                             0.0s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                         0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                              0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                                0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                           0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                                 0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                              0.0s
 => [builder 8/9] COPY . .                                                                                                                                    0.1s
 => [builder 9/9] RUN npm run build                                                                                                                           8.3s
 => [production 6/8] COPY --from=builder /app/dist ./dist                                                                                                     0.4s
 => [production 7/8] COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma                                                                     0.4s
 => [production 8/8] COPY prisma ./prisma                                                                                                                     0.2s
 => exporting to image                                                                                                                                       53.6s
 => => exporting layers                                                                                                                                      37.1s
 => => exporting manifest sha256:525e8c371e65aebcf41bc48962755d942df208f4018f1c1b67de4e93c1adfe8d                                                             0.1s
 => => exporting config sha256:26131225f292f14c8080fda426e7c630d6d53995db1f64b8aaf41a8640e7a45b                                                               0.1s
 => => exporting attestation manifest sha256:27110c7cf4079bbdfc0aff8d4b7bcc9d0f4a3138575bb6aef8242f16195bb626                                                 0.1s
 => => exporting manifest list sha256:6819302e8104c071aff98644803fcd628fc04695bb14875780443b9b9fc51b6d                                                        0.1s
 => => naming to 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21                                                                       0.0s
 => => unpacking to 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21                                                                   16.1s

C:\My_Projects\ShelfAPI-backend>docker push 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:a3f9c21
The push refers to repository [311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend]
b42e0281cc0c: Pushed 
4feea04c1543: Pushed 
e26fd0cf9413: Pushed 
2ea9c899dbc1: Pushed 
b2cbbfe903b0: Pushed 
fff4e2c1b189: Pushed 
2b4b1adafb77: Pushed 
38c70116a9e2: Pushed 
6fd88e7aae1d: Pushed 
cdb0b21d52c2: Pushed 
6a0ac1617861: Pushed 
6a1b2e388398: Pushed 
a3f9c21: digest: sha256:6819302e8104c071aff98644803fcd628fc04695bb14875780443b9b9fc51b6d size: 856

C:\My_Projects\ShelfAPI-backend>git rev-parse --short HEAD
655f609

C:\My_Projects\ShelfAPI-backend>aws ecr describe-images --repository-name shelfapi-backend --region ap-south-2
{                                                                                                                                                                 
    "imageDetails": [
        {
            "registryId": "311752058283",
            "repositoryName": "shelfapi-backend",
            "imageDigest": "sha256:27110c7cf4079bbdfc0aff8d4b7bcc9d0f4a3138575bb6aef8242f16195bb626",
            "imageSizeInBytes": 1725,
            "imagePushedAt": "2026-08-24T19:27:44.049000+05:30",
            "imageManifestMediaType": "application/vnd.oci.image.manifest.v1+json",
            "artifactMediaType": "application/vnd.oci.image.config.v1+json",
            "imageStatus": "ACTIVE"
        },
        {
            "registryId": "311752058283",
            "repositoryName": "shelfapi-backend",
            "imageDigest": "sha256:525e8c371e65aebcf41bc48962755d942df208f4018f1c1b67de4e93c1adfe8d",
            "imageSizeInBytes": 424821382,
            "imagePushedAt": "2026-08-24T19:27:44.073000+05:30",
            "imageManifestMediaType": "application/vnd.oci.image.manifest.v1+json",
^C                                                                                                                                                                

C:\My_Projects\ShelfAPI-backend>docker run -d --name shelfapi-app --restart unless-stopped -p 3000:3000 --env-file /home/ec2-user/.env 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:655f609        

What's next:
    Debug this container error with Gordon → docker ai "help me fix this container error"
docker: --env-file: open /home/ec2-user/.env: The system cannot find the path specified.

Run 'docker run --help' for more information

C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build

error TS6059: File 'C:/My_Projects/ShelfAPI-backend/generated/prisma/browser.ts' is not under 'rootDir' 'C:/My_Projects/ShelfAPI-backend/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by default include pattern '**/*'
  File is CommonJS module because 'C:/My_Projects/ShelfAPI-backend/package.json' does not have field "type"
error TS6059: File 'C:/My_Projects/ShelfAPI-backend/generated/prisma/client.ts' is not under 'rootDir' 'C:/My_Projects/ShelfAPI-backend/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by default include pattern '**/*'
  File is CommonJS module because 'C:/My_Projects/ShelfAPI-backend/package.json' does not have field "type"
error TS6059: File 'C:/My_Projects/ShelfAPI-backend/prisma.config.ts' is not under 'rootDir' 'C:/My_Projects/ShelfAPI-backend/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by default include pattern '**/*'
  File is CommonJS module because 'C:/My_Projects/ShelfAPI-backend/package.json' does not have field "type"

Found 3 error(s).


C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


C:\My_Projects\ShelfAPI-backend>npx tsc

C:\My_Projects\ShelfAPI-backend>npx tsc --noEmit

C:\My_Projects\ShelfAPI-backend>git status
warning: could not open directory '.claude/skills/prisma-cli/': No such file or directory
warning: could not open directory '.claude/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.claude/skills/prisma-compute/': No such file or directory
warning: could not open directory '.claude/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.claude/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.claude/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.claude/skills/prisma-upgrade-v7/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-cli/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-client-api/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-compute/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-database-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-driver-adapter-implementation/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-mongodb-upgrade/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-postgres-setup/': No such file or directory
warning: could not open directory '.windsurf/skills/prisma-upgrade-v7/': No such file or directory
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/docs/docs.module.ts
        modified:   src/docs/docs.service.ts

no changes added to commit (use "git add" and/or "git commit -a")

C:\My_Projects\ShelfAPI-backend>git add src/docs/docs.module.ts src/docs/docs.service.ts

C:\My_Projects\ShelfAPI-backend>git commit -m "fix: register S3 client in docs module"
[main 6eee52c] fix: register S3 client in docs module
 2 files changed, 15 insertions(+), 3 deletions(-)

C:\My_Projects\ShelfAPI-backend>git rev-parse --short HEAD
6eee52c

C:\My_Projects\ShelfAPI-backend>docker build -t shelfapi-backend:6eee52c .
[+] Building 14.5s (18/18) FINISHED                                                                                                     docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                    0.0s
 => => transferring dockerfile: 798B                                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                       1.8s
 => [internal] load .dockerignore                                                                                                                       0.0s
 => => transferring context: 111B                                                                                                                       0.0s
 => [internal] load build context                                                                                                                       0.1s
 => => transferring context: 370.62kB                                                                                                                   0.1s
 => [builder 1/9] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                         0.1s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                 0.1s
 => CACHED [builder 2/9] WORKDIR /app                                                                                                                   0.0s
 => CACHED [builder 3/9] RUN apk add --no-cache python3 make g++                                                                                        0.0s
 => CACHED [builder 4/9] COPY package*.json ./                                                                                                          0.0s
 => CACHED [builder 5/9] RUN npm ci                                                                                                                     0.0s
 => CACHED [builder 6/9] COPY prisma ./prisma                                                                                                           0.0s
 => CACHED [builder 7/9] RUN npx prisma generate                                                                                                        0.0s
 => [builder 8/9] COPY . .                                                                                                                              0.2s
 => [builder 9/9] RUN npm run build                                                                                                                     7.5s
 => CACHED [production 5/8] RUN npm ci --omit=dev                                                                                                       0.0s 
 => [production 6/8] COPY --from=builder /app/dist ./dist                                                                                               0.1s 
 => [production 7/8] COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma                                                               0.2s
 => [production 8/8] COPY prisma ./prisma                                                                                                               0.1s
 => exporting to image                                                                                                                                  1.3s
 => => exporting layers                                                                                                                                 0.7s
 => => exporting manifest sha256:128e213f0b31cf799b16f4e28b17f62f3429547d8548f5791bc63a5e570d3cce                                                       0.1s
 => => exporting config sha256:5a39339f4c20302d0f24f388704fe66cce18e509fab74b49d9342607d512dae3                                                         0.0s
 => => exporting attestation manifest sha256:06b24baff1f0fc1ae1245df51c305c2d4d9445bbed895c0ad31451781f2e7884                                           0.1s
 => => exporting manifest list sha256:fac179c38fdc93f806a66aa4b26d1c1f8db1f9aa055a633878c96c3d25282f7c                                                  0.0s
 => => naming to docker.io/library/shelfapi-backend:6eee52c                                                                                             0.0s
 => => unpacking to docker.io/library/shelfapi-backend:6eee52c                                                                                          0.2s

C:\My_Projects\ShelfAPI-backend>docker tag shelfapi-backend:6eee52c 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c

C:\My_Projects\ShelfAPI-backend>aws ecr get-login-password --region ap-south-2 | docker login --username AWS --password-stdin 311752058283.dkr.ecr.ap-south-2.amazonaws.com
Login Succeeded

C:\My_Projects\ShelfAPI-backend>docker push 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:8c42f1a
The push refers to repository [311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend]
tag does not exist: 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:8c42f1a

C:\My_Projects\ShelfAPI-backend>docker push 311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend:6eee52c
The push refers to repository [311752058283.dkr.ecr.ap-south-2.amazonaws.com/shelfapi-backend]
4feea04c1543: Layer already exists 
6a1b2e388398: Layer already exists 
6fd88e7aae1d: Layer already exists 
e7e7eb66aece: Pushed 
444f682fbbf7: Pushed 
6a0ac1617861: Layer already exists 
b2cbbfe903b0: Layer already exists 
fff4e2c1b189: Layer already exists 
38c70116a9e2: Layer already exists 
2ea9c899dbc1: Layer already exists 
e7552368dc39: Pushed 
27a87c3a5a25: Pushed 
6eee52c: digest: sha256:fac179c38fdc93f806a66aa4b26d1c1f8db1f9aa055a633878c96c3d25282f7c size: 856

C:\My_Projects\ShelfAPI-backend>Get-Content Dockerfile
'Get-Content' is not recognized as an internal or external command,
operable program or batch file.

C:\My_Projects\ShelfAPI-backend>npx tsc --noEmit

C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


C:\My_Projects\ShelfAPI-backend>git diff
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
 ESCESC
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
:
diff --git a/src/app.module.ts b/src/app.module.ts
index acfebe2..070ddb0 100644
--- a/src/app.module.ts
+++ b/src/app.module.ts
@@ -12,12 +12,26 @@ import { AuthService } from './auth/auth.service';
 import { PrismaService } from './prisma.service';
 import { ConfigModule } from '@nestjs/config';
 import { JwtService } from '@nestjs/jwt';
-import { DocsService } from './docs/docs.service';
-import { DocsController } from './docs/docs.controller';
 
 @Module({
-  imports: [UsersModule, DocsModule, HealthModule, AuthModule,ConfigModule.forRoot({isGlobal: true}), DocsModule],
-  controllers: [AppController, AuthController, UsersController, DocsController],
-  providers: [AppService, UsersService, AuthService, PrismaService, JwtService, DocsService],
+  imports: [
+    UsersModule,
+    DocsModule,
+    HealthModule,
+    AuthModule,
+    ConfigModule.forRoot({ isGlobal: true }),
+  ],
+  controllers: [
+    AppController,
+    AuthController,
+    UsersController,
+  ],

C:\My_Projects\ShelfAPI-backend>
C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


C:\My_Projects\ShelfAPI-backend>npm run build

> ShelfAPI@0.0.1 build
> nest build


C:\My_Projects\ShelfAPI-backend>
