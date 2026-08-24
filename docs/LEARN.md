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


