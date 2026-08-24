# AWS Setup

## Setting up VPC:

### Create a IAM user (using root account)

- Select IAM → IAM users;
- Create a User → user name: _**shelfapi-admin**_.
- Create user group → Enter group name: _**shelfapi**_.
- Attach Permission Policies → AdministratorAccess → submit _**Create user group**_.
- Select user group → submit _**create user**_.

---

### Create a VPC

- Select VPC → Your VPCs.
- Resources to Create: VPC only
- Name tag: shelfapi-vpc
- IPv4 CIDR block: IPv4 CIDR manual input → _**10.0.0.0/16**_
- IPv6 CIDR block: No IPv6 CIDR block
- Tenancy: Default (no compliance / dedicated resource requirement)
- VPC encryption control: None
- Submit _**Create VPC**_

---

### Create a subnet

- Select VPC → Subnets → Create a Subnet.

- VPC ID: _**shelfapi-vpc**_

- Subnet Settings:

  Subnet 1: (public)

  - Subnet Name: shelfapi-subnet-public-1a
  - Availability Zone: No preferences
  - IPv4 VPC CIDR block: _**10.0.0.0/16**_ (Default)
  - IPv4 subnet CIDR block: _**10.0.1.0/24**_ (256 IPs)

  Subnet 2:
  - Subnet Name: shelfapi-subnet-private-1a
  - Availability Zone: No preferences
  - IPv4 VPC CIDR block: _**10.0.0.0/16**_ (Default)
  - IPv4 subnet CIDR block: _**10.0.2.0/24**_ (256 IPs)

- Submit _**Create Subnet**_

---

### Create and attach an Internet Gateway

- VPC → Internet Gateways → Create internet gateway
- Name: shelfapi-igw
- Submit _**Create**_
- Go to IGW → Actions
- Attach to VPC → select shelfapi-vpc

- AWS models _**internet access**_ as an explicit resource we attach and then route to, rather than a flag. This is intentional friction — it forces us to consciously grant internet access rather than having it be an accidental default. It's also why forgetting this step is the #1 reason people get _**EC2 has a public IP but I still can't reach it.**_

---

### Route Tables — this is what actually makes a subnet _**public**_

- By default, when we create a VPC, AWS creates one main route table automatically, with a single rule: traffic within 10.0.0.0/16 stays local (this is automatic, we don't add it). Every subnet uses this main table unless we explicitly associate a different one.

- VPC → Route tables → Create route table.
- Name: shelfapi-public-rt
- VPC: shelfapi-vpc
- Submit _**create route table**_

- Select it → Routes tab → Edit routes → Add route
  - Destination: _**0.0.0.0/0**_ (meaning _**anywhere on the internet**_)
  - Target: our Internet Gateway (shelfapi-igw)
  - Submit _**save changes**_

- Subnet Associations tab → Edit subnet associations (Subnets without explicit associations) → check _**shelfapi-subnet-public-1a**_.

---

### Elastic IP

- a separate, static public IP we allocate and manually associate with our instance.

- VPC → Elastic IPs → Allocate Elastic IP address .
- Then later, associate it with our EC2 instance once it's launched.

- **Trade-off**:  
  AWS charges a small hourly fee only if the Elastic IP is allocated but not attached to a running instance (to discourage hoarding unused IPs) — once attached to a running instance it's free.  
  So, allocate it right before or right after launching EC2, don't let it sit unattached.

---

### Interview-ready summary line:

- _**Public vs private subnet**_ isn't an inherent property — it's determined entirely by whether that subnet's route table has a route to an Internet Gateway.

- My database sits in a subnet with no such route, so it's architecturally unreachable from the internet regardless of any security group misconfiguration — defense in depth at the network layer, before security groups even get evaluated.

---

---

## Security Groups

Networking (VPC/subnets/routing) controls whether traffic can physically get to a resource.  
Security Groups are the next layer — they control whether that traffic is permitted, on a per-resource basis, regardless of what the subnet allows.

Think of subnets/routing as "which roads exist," and security groups as "who's allowed through this specific door."

Three properties:

1. Security Groups are attached to the resource's network interface (ENI), not the subnet.  
   eg: Two EC2 instances in the same subnet can have completely different SGs.

2. Security Groups are stateful.  
   If we allow inbound traffic on port 443, the response to that traffic is automatically allowed out — we don't need a matching outbound rule for replies.

3. Security Groups are allow-only — no explicit "deny" rules.  
   Everything is default-deny, and we add rules that punch specific holes.  
   To actively block a specific bad actor's IP, use NACLs or WAF.

---

### Create a EC2 Security Group

- EC2 → Security Groups (Under Network & Security) → Create security group
- Name: shelfapi-ec2-sg
- Description: something meaningful, e.g. "SG for ShelfAPI app server"
- VPC: shelfapi-vpc

- Inbound rules — three we actually need:  
  (Set Anywhere-ipv4 & Anywhere-ipv6 for HTTP & HTTPS)

  | Type  | Port | Source          | Why                                                                                                                              |
  | ----- | ---: | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
  | HTTP  |   80 | `0.0.0.0/0`     | Public web traffic. Mostly redirected to 443, but needs to be open for Certbot's HTTP-01 challenge and for the redirect to work. |
  | HTTPS |  443 | `0.0.0.0/0`     | Public API traffic over TLS.                                                                                                     |
  | SSH   |   22 | **Our IP only** | Admin access. Use the **"My IP"** option in the console, not `0.0.0.0/0`.                                                        |
  - SSH: Opening port 22 to _**0.0.0.0/0**_ means every bot on the internet scanning for SSH will hit our instance constantly, brute-forcing credentials.  
    _**Our IP only**_ has its own annoyance: our home/mobile IP changes, so we'll periodically need to update this rule.  
    Better use AWS Systems Manager (SSM) Session Manager (_discussed in later IAM section_). ***If chose SSM, don't open port 22 at all ***.

---

### Create a RDS Security Group

- EC2 → Security Groups (Under Network & Security) → Create security group
- Name: shelfapi-rds-sg
- VPC: shelfapi-vpc

- Inbound rules:

  | Type       | Port | Source                                                                             |
  | ---------- | ---: | ---------------------------------------------------------------------------------- |
  | PostgreSQL | 5432 | Custom -> `shelfapi-ec2-sg` (select the **security group itself**, not an IP/CIDR) |

- When we set the source as another security group, AWS evaluates it dynamically: "allow inbound from any resource that currently has shelfapi-ec2-sg attached to it."  
  This means:

  - If our EC2's IP changes (stop/start without Elastic IP, or we replace the instance entirely), the rule still works — no manual update needed, because it's not tracking an IP, it's tracking group membership.
  - If we later add a second EC2 instance (e.g., for a worker process) and attach the same SG to it, it automatically gets DB access too — no RDS SG edit required.
  - _**Critically: this means nothing on the public internet can reach RDS at all**_, even if someone discovers our RDS endpoint hostname. The connection would be rejected at the security group layer before Postgres authentication is even attempted — the DB password becomes a second line of defense, not the only one.

---

### A note on ports we might be tempted to open but shouldn't.

- _**Port 3000 (Node's app port) to 0.0.0.0/0**_: **don't**.  
  Traffic should only ever reach Node via Nginx's reverse proxy on 80/443. If 3000 is open publicly, people can bypass Nginx (and our TLS, rate limiting, etc.) entirely and hit Node raw.  
  Node listens on localhost:3000 or 127.0.0.1:3000 — not even bound to the instance's external interface — and Nginx proxies to it locally.  
  No SG rule for 3000 should exist at all; the OS-level binding to localhost is what actually prevents this, the SG is a backup layer.

- _**Port 5432 to our local machine's IP**_ (for connecting a DB GUI tool like pgAdmin directly from our laptop): tempting during development, **but avoid** opening this broadly.  
  If we need this occasionally, add a temporary rule scoped to our specific IP and remove it after — or better, use SSM port forwarding (aws ssm start-session with a port-forward document) to tunnel through EC2 without ever opening 5432 publicly at all.

---

### Why this two-SG setup is "defense in depth"

Walk through what an attacker would need to actually reach our database:

- They'd need network-level reachability — blocked already, since RDS sits in a private subnet with no internet gateway route (previous section).

- Even if that somehow failed, they'd need to be a resource carrying shelfapi-ec2-sg — blocked, since only our specific EC2 instance carries that SG.

- Even if that somehow failed, they'd need valid Postgres credentials.

---

### Interview-ready line

- My RDS security group doesn't reference an IP range at all — it references the EC2 security group by ID.

- That means database access is scoped to 'whatever resource carries this specific security group' rather than 'whatever's at this IP,' which stays correct automatically even if the EC2 instance is replaced or its IP changes.

---

---

## IAM (Identity and Access Management)

- controls who/what can do what across AWS.

- Security Groups control network reachability — IAM controls API-level permissions, regardless of network path.

- A request could sail through every SG rule and still get rejected by IAM if the caller lacks permission to make that specific API call.

### Users vs Roles, and why our app needs a Role, not a User

- **IAM User:** a persistent identity with long-lived credentials (access key + secret key), meant for a human or an external system that needs to authenticate from outside AWS.  
  If we aws configure on our laptop, we're using an IAM User's keys.

- **IAM Role:** a temporary identity with no long-lived credentials at all. Instead, it's assumed by something — an EC2 instance, an ECS task, a Lambda function — and AWS automatically issues short-lived, auto-rotating credentials to whatever assumed it.

- Why our EC2 instance should use a Role, never a User's access keys?
  - If we were to aws configure an IAM User's access key + secret directly onto our EC2 instance (e.g., in a .env file), we'd have a static, long-lived credential sitting on disk.  
    If that instance is ever compromised, that credential is compromised — **permanently**, until we notice and manually rotate it.

  - With an IAM Role attached to the instance, the AWS SDK running in our NestJS app automatically fetches temporary credentials from the Instance Metadata Service (IMDS) — a special internal-only endpoint (169.254.169.254) reachable only from inside the instance.  
    These credentials auto-expire and auto-rotate; we write zero credential-handling code. new S3Client({ region: "ap-south-1b" }) with no keys specified — the SDK finds them automatically via this mechanism.

  - **Tradeoff:** The only place IAM Users with access keys still make sense is external CI systems (like GitHub Actions) that aren't running inside AWS — though even there, the modern best practice is OIDC federation, which lets GitHub Actions assume a Role too, avoiding stored keys entirely.

---

### Create the IAM Role for EC2

- IAM → Roles → Create role

- Trusted entity type: AWS Service

- Use case: EC2 (this configures the "trust policy" — i.e., who's allowed to assume this role — to specifically be the EC2 service).

- Click Next — to attach permission policies.

- Attach permissions:
  - AmazonSSMManagedInstanceCore (to communicate with the SSM service, enabling Session Manager)

  - AmazonEC2ContainerRegistryReadOnly (for pulling Docker images onto the instance)

  - CloudWatchAgentServerPolicy (to push logs and custom metrics)

  - S3 Access: Custom (as we likely don't need s3:DeleteBucket or s3:PutBucketPolicy)

  ```
      Actions: s3:GetObject, s3:PutObject, s3:DeleteObject
      Resource:   arn:aws:s3:::our-bucket-name/*
  ```

- Next -> Role name: "shelfapi-ec2-role"
- Create

---

### What about IAM for RDS and other services?

- RDS doesn't need an IAM role in the way EC2 does — our app authenticates to Postgres using a database username/password (stored as an environment variable, ideally pulled from AWS Secrets Manager rather than hardcoded).

- There is an alternative called _**IAM Database Authentication**_ (auth to RDS using IAM tokens instead of a password) — more advanced, adds token-refresh complexity to our Prisma connection setup, and isn't necessary at our current scale.

---

### Interview-ready line:

- My EC2 instance has no static AWS credentials anywhere — it assumes an IAM role that issues temporary, auto-rotating credentials via the instance metadata service.

- Every policy attached is scoped to specific actions and specific resource ARNs — for example, S3 access is limited to GetObject/PutObject/DeleteObject on one named bucket, not full S3 access — so a compromised instance has a bounded blast radius instead of full account access.

---

---

## EC2 - Machine that actually runs the app

- t3 instances are the low cost burstable general purpose instance type that provide a baseline level of CPU performance with the ability to burst CPU usage at any time for as long as required.

- They are designed for applications with moderate CPU usage that experience temporary spikes in use.

- They accumulate "CPU credits" during idle time and spend them during traffic spikes.

### Launch Instance

- EC2 → Instances → Launch instance

- Name: shelfapi-app-server

- Add Tags (good practice): "Project: shelfapi", "Env: prod"

- Select OS : Amazon Machine Image (Architecture: 64-bit (x86))

- Instance type: t3.micro

- Create a new Key pair: (_**Download and store it somewhere safe**_)
  - Key pair name: shelfapi-key
  - Type: RSA
  - Format: .pem

- Network settings
  - VPC: select "shelfapi-vpc"
  - Subnet: select "shelfapi-public-1a"
  - Auto-assign public IP: Enable _(we'll still want the Elastic IP for stability, but this gets us a working IP immediately at launch; we associate the Elastic IP right after)_
  - Firewall (security groups): select existing → "shelfapi-ec2-sg"

- Storage: 20GB gp3 EBS volume

- Advanced details — IAM instance profile _(critical - makes everything from the IAM section actually take effect)_
  - Scroll to "Advanced details" → IAM instance profile → select "shelfapi-ec2-role".

- Click Launch instance.

- Wait for status checks (3/3) to pass — a couple minutes.

- VPC → Elastic IPs → Allocate (if not already done) → select it → Actions → Associate Elastic IP address → choose the created instance.

- **First connection — via SSM**  
  EC2 → Instances → select the instance → Connect → Session Manager tab → Connect.

---

### Decisions behind each choice

- **Tags** matter more than they seem — once we have RDS, S3, EC2, ECR all running, consistent tags, let us filter the Cost Explorer and find "what am I actually paying for" later.

- Choosing OS:

  |                                      | Amazon Linux 2023                                         | Ubuntu                                             |
  | ------------------------------------ | --------------------------------------------------------- | -------------------------------------------------- |
  | SSM Agent                            | Pre-installed                                             | Needs manual install (one extra step)              |
  | Package manager                      | `dnf`                                                     | `apt`                                              |
  | Security patch cadence               | AWS-optimized, tends to be faster for AWS-specific issues | Standard Ubuntu cadence, very well documented      |
  | Community docs/Stack Overflow volume | Less (AWS-specific audience)                              | Much larger — most Node.js tutorials assume Ubuntu |
  | IMDSv2                               | Enforced by default on newer AMIs                         | Depends on launch config either way                |
  - Chose Amazon Linux: since SSM comes pre-installed, it removes a manual setup step for the no-SSH approach.

  - _**Tradeoff:**_ If we pick Ubuntu instead: nothing breaks, we just manually install the SSM agent (a documented, four-line install script) as an extra first step, and we'll find more Stack Overflow answers when debugging Node/npm issues specifically.

  - **Architecture::** 64-bit (x86) with a t3 instance is the safer, more universally-compatible default.  
    _**Graviton**_, _if selecting a t4g instance type next — cheaper and faster for Node workloads. Only reason to avoid:  
    if some native npm dependency (e.g. certain versions of sharp, bcrypt) lacks a prebuilt ARM binary and needs compiling from source on install, which is usually fine but occasionally adds install time._

- Instance type: t3.micro  
  Free-tier eligible _(750 hrs/month free for 12 months on a new account), and genuinely sufficient for a single NestJS process serving low/moderate traffic._

- Key Pair  
  Even without SSH access enabled via security group, EC2 still requires a key pair at launch (used for encrypted password retrieval on Windows instances, and as a fallback).

- gp3 vs gp2 (Storage): chose gp3  
  _gp3 is the newer generation, same reliability, generally cheaper per GB and lets us provision IOPS/throughput independently of size._

- Why not store uploaded files here (EC2 storage) instead of S3?  
  EBS volumes are tied to a single instance — if we ever replace the instance (which we will, during any redeployment strategy beyond simple in-place updates, or an AZ failure), local disk data is gone unless separately backed up.  
  S3 is durable (11 nines) and decoupled from instance lifecycle entirely.

- Elastic IP: a stable public IP that survives stop/start cycles.

- connection — via SSM: opens a browser-based shell, authenticated entirely through our AWS console login and the instance's IAM role — no key pair, no open port 22, no SSH client needed.

---

### Interview-ready line:

- I connect to my EC2 instance exclusively through SSM Session Manager — there's no open port 22 at all.

- Access is governed entirely by IAM policy rather than a network-level SSH rule, which means access can be granted or revoked instantly via IAM without touching security groups, and there's no SSH key to leak or rotate.

---

---

## ECR (Elastic Container Registry)

- ECR is where our Docker images live between "built in CI" and "pulled onto EC2."

- Think of it as the project's private Docker Hub, fully inside our AWS account/IAM boundary.

### Create the repository:

- ECR → Repositories → Create repository

- Visibility: Private

- Repository name: shelfapi-backend (matches our actual repo naming — keep it recognizable)

- Tag immutability: Enable

- Encryption: leave default (AES-256, AWS-managed key)

- Scan on push: Enable (— free)  
  flags known vulnerabilities (e.g., an outdated base image with a CVE) right after each push, visible in the console.

- Click "create".

---

### Create a Lifecycle policy — don't let old images pile up

- Every push creates a new immutable image — left unmanaged, we accumulate storage costs and clutter indefinitely.

- Inside ECR repo → Lifecycle Policy → Create rule.

- Reasonable starting rule: "Keep only the last 10 images" (or expire untagged images after 1 day).  
  This costs nothing to set up and prevents silent storage bill creep.
  - Priority - 1  
    [Rules are evaluated in priority order (lowest number first)]

  - Description: Keep only the last 10 images

  - Image tag status: Any (since using git commit SHA for tags)

  - Match criteria: Image Count

  - Image count before action: 10

  - Rule Action: Expire

- Click "Save".

---

### What actually gets pushed — a quick preview of the Dockerfile's output??

- The image pushed to this repo is the production build artifact — compiled dist/ JS output + only production node_modules, not our source TypeScript, not devDependencies, not .git.

- This keeps the image small (faster pulls onto EC2, less attack surface, faster container start).

---

### Why not just use Docker Hub?

- We could — Docker Hub is a valid public/private registry. But ECR has specific advantages for this setup:

  - _**IAM-native auth:**_ pulling from ECR uses the same IAM role our EC2 instance already has (from the IAM section) — no separate Docker Hub account/token to manage or leak.

  - _**No public exposure by default:**_ ECR private repos aren't discoverable or pullable by anyone outside our AWS account, whereas Docker Hub free tier repos are public unless we pay for private ones.

  - _**Regional co-location:**_ pulling from ECR in the same region as our EC2 instance is fast and free (no data transfer charges within-region); Docker Hub pulls go over the public internet.

  - _**Vulnerability scanning built in:**_ ECR can automatically scan pushed images for known CVEs in OS packages — a genuinely useful free security feature.

- **Trade-off:** ECR is AWS-only — if we ever wanted to run the same image on a non-AWS platform (e.g., a demo on Railway/Render), we'd need to also push to Docker Hub or re-pull/re-tag.

---

### What tag immutability means and why it matters?

- Without it, we could push a new image and tag it latest, overwriting what latest used to point to — meaning if something goes wrong, we've lost the ability to know which exact build was previously running.

- With immutability enabled, once a tag (e.g. a3f9c21) is pushed, that tag can never be overwritten — we're forced to push new commits under new tags.

- This is what makes _**rollback actually reliable**_: docker run <previous-git-sha-tag> unambiguously gets us back the exact previous build.

---

### Practical tagging strategy

- Tag images by git commit SHA (e.g. shelfapi-backend:a3f9c21), not latest.

- Our CI pipeline will use ${{ github.sha }} as the tag automatically.

- This also means our deploy script always knows exactly which image is running in prod at any moment — traceable directly back to a specific commit, useful for debugging ("what changed between this incident and the last known-good state").

---

### How authentication actually works (both from CI and from EC2)?

- From EC2 (pulling): because the instance's IAM role has AmazonEC2ContainerRegistryReadOnly, we run:

  ```
  aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com
  ```

  - What's happening:  
    aws ecr get-login-password uses the instance's IAM role credentials (fetched automatically via IMDS, no keys anywhere) to ask ECR for a temporary auth token, valid for 12 hours.  
    That token is piped into docker login as the password. After this, docker pull <repo-uri>:<tag> works normally.  
    We'll need to re-run the login command periodically (or script it into every deploy) since the token expires — this isn't a one-time setup step, it's part of the deploy flow.

- From CI (pushing):  
  same mechanism, but the identity behind it differs — GitHub Actions needs some AWS identity to call get-login-password.  
  This is exactly where the OIDC federation approach comes in: GitHub Actions assumes a dedicated IAM role (via OIDC trust, no stored keys) that's scoped to ecr:GetAuthorizationToken + push permissions on this specific repo.

---

### Interview-ready line:

- I tag every image by git SHA with tag immutability enabled on the ECR repo, so latest never silently changes underneath me — rollback is just running the previous known-good SHA's image.

- Both push (from CI) and pull (from EC2) authenticate via IAM roles rather than static keys — CI assumes a role via OIDC, EC2 uses its instance profile — so there are no long-lived AWS credentials stored anywhere in the pipeline.

---

---

## ECR Lifecycle Policy

### Rule priority

- Rules are evaluated in priority order (lowest number first), and each image is only acted on by the first rule that matches it — once a rule claims an image, later rules don't re-evaluate it.

- This matters the moment we have more than one rule (e.g., one rule for tagged images, another for untagged) — we need to think about which should be evaluated first.

- For a single rule, priority 1 is fine. If we later add a second rule (e.g., untagged cleanup), give it a lower priority number so it runs first — untagged images are usually safe to be more aggressive with than tagged ones.

---

### Rule description

- Free text, purely for our own future reference — e.g. "Keep last 10 tagged commit-SHA images, expire the rest".

- Costs nothing, worth filling in so future-you understands intent without reverse-engineering the filter logic.

---

### Image tag status (decides which images this rule even looks at)

| Option                         | What it matches                                                                                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tagged (wildcard matching)** | Images whose tag matches a wildcard pattern we specify (e.g. `v*`, `staging-*`)                                                                                                                   |
| **Tagged (prefix matching)**   | Images whose tag starts with a specific literal prefix                                                                                                                                            |
| **Untagged**                   | Images with no tag at all — these accumulate when a tag gets reassigned (can't happen under our immutability setting, but also happens from failed/interrupted pushes leaving orphaned manifests) |
| **Any**                        | All images, tagged or not                                                                                                                                                                         |

- For current setup: since we're tagging every image by git commit SHA (a3f9c21, b91e004, etc.) rather than a predictable prefix like v1., v2. — there's no clean prefix or wildcard pattern to filter on.

- The right choice is "Any" for our main cleanup rule (git SHAs don't share a common prefix we can filter by), or optionally a second, separate rule scoped specifically to "Untagged" with a more aggressive policy (e.g., expire after 1 day) since untagged images are always safe to discard quickly — they're orphaned by definition, nothing should ever reference them.

---

### Image tag filters

- Only relevant if we picked "Tagged (wildcard matching)" or "Tagged (prefix matching)" above — lets us scope the rule to only tags matching a pattern. Since we're using "Any" (per above), leave this blank/skip it — it's greyed out or irrelevant once "Any" is selected.

- If we later adopt a more structured tagging scheme (e.g., tagging both by SHA and additionally tagging release builds as release-*), this field becomes useful for having different retention rules for release-tagged vs commit-SHA-tagged images.

---

### Match criteria

- actually determines how old/many is "too many".

| Option                                 | What it does                                                                                      | Best for                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Days since image created**           | Expires images older than N days, regardless of pull activity                                     | Simple time-based hygiene                                                                                       |
| **Days since last recorded pull time** | Expires images not pulled in N days — keeps images that are still actively being used even if old | Useful if we sometimes roll back to older tags and want them preserved as long as they're actually being pulled |
| **Days since image archived**          | Only relevant if using the Archive action — time since an image moved to archive storage          | Two-tier lifecycle (active → archive → delete), not needed at our scale                                         |
| **Image count**                        | Keeps the N most recently pushed images, expires everything older by push order                   | Simple "keep last N" — what I originally described                                                              |

---

### Image count before action

- Paired with "Image count" match criteria above — this is literally the "10" in "keep last 10." Set to 10.

---

### Rule action — the field with a genuine trade-off

| Action      | What happens                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| **Expire**  | Permanently **deletes** the image immediately when the rule matches                                            |
| **Archive** | Moves the image to a **cheaper storage class**, out of the standard repository listing, instead of deleting it |

- _**Expire vs Archive, the actual trade-off:**_  
  Archive is ECR's newer option (moves images to a lower-cost tier rather than destroying them) — useful if we want indefinite retention for compliance/audit reasons but don't want to pay standard storage rates for rarely-accessed old images.  
  Expire is simpler — at 10 images retained and near-zero storage cost either way (a few hundred MB per image), the cost difference between Expire and Archive is negligible at our scale, and Expire is easier to reason about ("old images are just gone, ECR always shows only what's current and relevant") versus managing an archive tier we'd rarely if ever need to pull from.

---

### The destructive-action warning

- Lifecycle Policy Preview lets us run the rule against our existing images before it goes live, showing us exactly which images would be expired immediately upon saving.

- Worth running once — if we've only pushed a handful of images so far, the preview should show "0 images affected" (since we're not yet over the count-10 threshold), confirming the rule is correctly scoped before it can do anything destructive.

---

### Optional second rule, if we want tighter untagged cleanup

| Field            | Value                                |
| ---------------- | ------------------------------------ |
| Rule priority    | `2`                                  |
| Rule description | `Expire untagged images after 1 day` |
| Image tag status | `Untagged`                           |
| Match criteria   | `Days since image created`           |
| Value            | `1`                                  |
| Rule action      | `Expire`                             |

---

---

## Docker

### Installing Docker on EC2

- Connect via SSM Session Manager, then:

  ```
  sudo dnf update -y
  sudo dnf install -y docker
  sudo systemctl start docker
  sudo systemctl enable docker
  ```

  - _**dnf update**_ — patches the OS first (standard hygiene before installing anything new).
  - _**dnf install docker**_ — Amazon Linux 2023 ships Docker in its own repos, no need to add Docker's official repo like we would on Ubuntu.
  - _**systemctl start docker**_ — starts the Docker daemon now.
  - _**systemctl enable docker**_ — ensures Docker starts automatically on every instance reboot (important — without this, a reboot from an AWS maintenance event would leave our app down until we manually restart Docker).

- Let our SSM user run docker without sudo (convenience, not required):

  ```
  sudo usermod -aG docker ssm-user
  ```

- We'll need to start a new SSM session for this group membership to take effect. Verify:
  ```
  docker --version
  docker ps
  ```

---

### Dockerfile - multi-stage build

#### Inside the Nestjs app' root directory

```
# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY . .
RUN npm run build

# ---- Stage 2: Production runtime ----
FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY prisma ./prisma

EXPOSE 3000

CMD ["node", "dist/main.js"]
```

- _**node:20-alpine**_ — Alpine is a minimal Linux distro (~5MB base vs ~150MB+ for the standard Debian-based Node image).  
  Trade-off: Alpine uses musl libc instead of glibc, which occasionally breaks native npm modules (e.g., some versions of bcrypt, sharp) that expect glibc.  
  If we hit mysterious native-binding errors, that's usually why — the fix is either node:20-slim (Debian-based, smaller than full but glibc-compatible) or adding Alpine's python3 make g++ build tools to recompile the native module inside the container.

- **_COPY package_.json ./ before COPY . .** — this ordering is deliberate, for Docker layer caching.  
  Docker caches each instruction as a layer; if package.json hasn't changed, RUN npm ci (the slow step, downloading all dependencies) is skipped on rebuild and pulled from cache — only if we copied all source first would any code change invalidate the dependency-install layer too, making every rebuild slow even for a one-line code change.

- _**npm ci not npm install**_ — ci does a clean install strictly from package-lock.json, failing if the lockfile and package.json are out of sync.  
  This guarantees the exact same dependency versions in every build (reproducibility) — **npm install** can silently update the lockfile and install slightly different versions, which is exactly the kind of "works in CI, breaks in prod" drift we don't want.

- _**npx prisma generate**_ — Prisma generates a client based on our schema; this must happen at build time so the compiled output includes the generated client code. Easy to forget — if omitted, the app crashes at runtime with a "Prisma Client not generated" error.

- _**RUN npm ci --omit=dev**_ in the production stage — re-installs, but this time skipping devDependencies entirely, since this stage's node_modules is what actually ships in the final image (the builder stage's node_modules is discarded along with everything else in that stage).

- _**EXPOSE 3000**_ — documentation/metadata only, doesn't actually publish the port (that happens at docker run -p 3000:3000) — a common misconception worth knowing.

- _**CMD ["node", "dist/main.js"]**_ — runs the compiled JS directly, no ts-node, no nest start dev-mode watcher — this is what makes production start fast and lightweight.

---

### Why two stages (builder and production), not one?

- The build stage needs the full dependency tree (including TypeScript, ESLint, testing libs — all devDependencies) plus our raw .ts source, to run npm run build (which invokes tsc or NestJS's compiler).

- None of that — the TypeScript source, devDependencies, build tooling — is needed ****to actually run the compiled app****.

- If we shipped all of it, our final image would be significantly larger (often 3-5x), which means slower pulls onto EC2 during every deploy, more disk usage, and a larger attack surface (more installed packages = more potential CVEs, which ECR's scan-on-push would flag).

- The _**COPY --from=builder**_ lines are the key mechanism: they cherry-pick only the compiled output (dist/) from the first stage into the second, discarding everything else the build stage touched.

- The final image never contains our TypeScript source or devDependencies at all.

---

### .dockerignore (Critical)

```
node_modules
dist
.git
.env
*.md
```

- Without this, **COPY . .** in the build stage would copy our local node_modules (huge, platform-specific, possibly wrong architecture) and .env (secrets!) straight into the image — a real security mistake, not just a size issue.

- Never let .env end up inside a Docker image; it gets baked into an image layer permanently, retrievable by anyone who later pulls that image, even after we "delete" the line — that's how Docker layer caching works.

---

### docker-compose.yml (for local dependencies only)

```
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: localdev
      POSTGRES_DB: shelfapi
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

- Run _**docker-compose up -d**_, then run NestJS itself normally on our host: _**npm run start:dev**_, pointing _**DATABASE_URL**_ at _**localhost:5432**_.

- This gives us hot-reload (fast iteration) while still matching prod's exact Postgres version — the whole point of using Docker in dev is dependency parity, not app containerization.

- **What about prod?**

  - Prod (EC2): the app itself is the container. CI builds the multi-stage Dockerfile above, pushes to ECR, EC2 pulls and runs it:

    ```
    docker run -d \
    --name shelfapi-app \
    --restart unless-stopped \
    -p 3000:3000 \
    --env-file /home/ec2-user/.env \
    123456789012.dkr.ecr.us-east-1.amazonaws.com/shelfapi-backend:a3f9c21
    ```

    - _**--restart unless-stopped**_ — Docker's own crash-recovery, replacing pm2's role — if the Node process inside crashes, Docker restarts the container automatically; survives host reboots too, restarting when the Docker daemon comes back up.

    - _**-p 3000:3000**_ — publishes container's internal 3000 to the host's 3000 — this is what Nginx proxies to (proxy_pass http://localhost:3000).

    - _**--env-file**_ — keeps secrets (DB connection string, JWT secret, S3 bucket name) out of the image entirely, injected at container start instead. This file lives only on the EC2 instance, never in git, never in the image.

---

### Interview-ready line

- My Dockerfile is a two-stage build — the build stage has the full TypeScript toolchain and devDependencies to compile the app, but only the compiled dist/ output and production node_modules get copied into the final runtime stage.

- That keeps the shipped image lean and means devDependencies and source TypeScript never exist inside the running container at all.

---

---

## Nginx

Nginx sits between the internet and our Dockerized Node app.  
It's installed directly on the EC2 host OS (not containerized).

### Install Nginx on EC2

- Via SSM session:

  ```
  sudo dnf install -y nginx
  sudo systemctl start nginx
  sudo systemctl enable nginx
  ```

- At this point, hitting our Elastic IP in a browser over port 80 shows Nginx's default "It works" page — confirms the SG rule (80 open) and the install are both correct, before we touch any app config.

---

### Why Nginx lives on the host, not in a container??

- Our deploy strategy swaps the app container on every push — stop old, start new.

- If Nginx were in the same lifecycle, we'd risk a brief window where nothing is listening on 80/443 at all during the swap, versus now: Nginx never stops, it just briefly gets connection-refused from upstream (port 3000) for the few seconds the app container is restarting, which it can be configured to retry/queue rather than hard-fail.

- Certbot's auto-renewal (below) integrates directly with a host-installed Nginx via a plugin that edits config files and reloads the service — doing this cleanly against a containerized Nginx needs extra volume-mounting gymnastics for the cert files and config.

- **Trade-off**: Our EC2 instance now has two different "app management" paradigms — Nginx via systemd, app via Docker. Some teams prefer full consistency (everything in Docker, including Nginx, orchestrated via docker-compose) for portability.  
  For a single-instance setup where Nginx's job is narrowly "stable TLS-terminating proxy," host-level is simpler and more resilient to app-container churn.

---

### Basic reverse proxy config

- Edit (or create) /etc/nginx/conf.d/shelfapi.conf:

  ```
  - sudo tee /etc/nginx/conf.d/shelfapi.conf > /dev/null << 'EOF'
  - server {
      listen 80;
      server_name api.<my-domain>;

      location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_cache_bypass $http_upgrade;
      }
  }
  EOF
  ```

  - _**proxy_pass http://localhost:3000**_ — the actual reverse proxy directive; forwards to our Docker container's published port. Since Node inside the container is bound to all interfaces but only published to localhost:3000 on the host, this stays unreachable from outside except through this Nginx hop.

  - _**proxy_set_header Host $host**_ — without this, our NestJS app sees every request as coming from localhost rather than the real domain — breaks anything relying on the Host header (e.g., generating absolute URLs, some CORS logic).

  - _**X-Real-IP / X-Forwarded-For**_ — critical if we do any rate limiting or logging by client IP in NestJS. Without these headers, every request appears to originate from Nginx's own IP (127.0.0.1), since Nginx is a proxy — our app must read X-Forwarded-For (NestJS: app.set('trust proxy', true) if using Express under the hood, which NestJS does by default) to get the real client IP.

  - _**X-Forwarded-Proto**_ — tells our app whether the original request was HTTP or HTTPS (relevant once we add the 443 block below) — useful for logic like "redirect to HTTPS" or secure-cookie flags that should only apply when the real connection was encrypted.

  - _**Upgrade/Connection headers**_ — needed only if we use WebSockets anywhere (NestJS supports WS gateways). If ShelfAPI is pure REST, these lines are harmless to leave in (future-proofing) but not strictly required yet.

  - _Why this is often the cleanest option in an SSM session specifically: we paste the entire block (including the sudo tee ... << 'EOF' line and the closing EOF) in one go, press Enter, and it writes the file exactly as typed — no insert-mode toggling, no risk of vi's auto-indent corrupting pasted whitespace.  
    The 'EOF' (quoted) tells the shell to treat everything between the two EOF markers as literal text, not something to interpret (important here since our config contains $host, $remote_addr etc. — without quoting EOF, the shell would try to substitute those as its own variables and strip them out, silently breaking your config)._

    - _Why tee instead of a simple redirect (sudo > file doesn't actually work the way people expect): sudo echo "..." > /etc/nginx/conf.d/shelfapi.conf fails with "permission denied" even with sudo, because the redirect (>) is performed by our shell before sudo elevation applies — only the echo command itself runs as root, not the file write. tee sidesteps this because tee itself (running as root, via sudo) is the thing performing the write, not shell redirection._

    - _After editing, either way — validate before reloading:_

      ```
      sudo nginx -t
      ```

    - Expected output:

      ```
      nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
      nginx: configuration file /etc/nginx/nginx.conf test is
      ```

    - _If it reports a syntax error, don't reload yet — fix the reported line first. Reloading with a broken config can leave Nginx running on its old config silently, or in some failure modes, not running at all._

      ```
      sudo systemctl reload nginx
      ```

      - _reload (not restart) applies the new config without dropping existing connections — a graceful re-read, versus restart which briefly stops and starts the whole service._

- Test config validity before reloading (a good habit — a syntax error in reload can silently leave the old config running, or worse, take Nginx down):
  ```
  sudo nginx -t
  sudo systemctl reload nginx
  ```

---

### Setting Up api.<my-domain> → My Elastic IP

- Step 1: Get the Elastic IP

  EC2 console → Elastic IPs → copy the address associated with our instance (e.g. 13.234.56.78).

- Step 2: Add the DNS record in Hostinger

  Path: Hostinger dashboard (hPanel) → Domains → <my-domain> → DNS / Nameservers (may be labeled "DNS Zone Editor")

  - Add a new record — do not edit your existing root @ record, which is presumably still pointing at wherever your portfolio site (Vercel/Netlify) lives:

    | Field       | Value                                   |
    | ----------- | --------------------------------------- |
    | Type        | `A`                                     |
    | Name / Host | `api`                                   |
    | Points to   | `13.234.56.78` (your actual Elastic IP) |
    | TTL         | Default / Automatic                     |

  - Save.

- Step 3: Wait for propagation, then verify

  - Usually a few minutes to ~30 minutes on Hostinger, occasionally longer.

  - Use https://dnschecker.org and search api.<my-domain> to confirm it resolves consistently across regions.

- Step 4: Confirm Nginx's server_name matches

  - Should already be set from earlier:

    ```
    nginx
    server_name api.<my-domain>;
    ```

- Step 5: Test over plain HTTP first, before touching Certbot:

  ```
  curl http://api.<my-domain>
  ```

  - If this returns our app's response (or at least reaches Nginx), DNS + Nginx are correctly wired.

- Step 6: Only now run Certbot

  ```
  sudo certbot --nginx -d api.<my-domain>
  ```

  - _Why this order matters: Certbot's domain-ownership check fetches a verification file over http://api.<my-domain>/... — if DNS hasn't propagated yet, this fails with a domain-verification error that looks like a Certbot problem but is really just a timing issue. Confirming dig/curl work first avoids a confusing failed attempt._

---

### SSL via Certbot

- Amazon Linux 2023 doesn't have Certbot in its default package repos the way Ubuntu does — hence the pip-based install via a dedicated virtualenv, which is Certbot's own officially recommended method for AL2023/RHEL-family systems

  ```
  sudo dnf install -y python3 augeas-libs
  sudo python3 -m venv /opt/certbot/
  sudo /opt/certbot/bin/pip install --upgrade pip
  sudo /opt/certbot/bin/pip install certbot certbot-nginx
  sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
  ```

- **sudo certbot --nginx -d <my-domain>**

  - What this single command actually does:

    1. Validates us control the domain via the HTTP-01 challenge — Certbot temporarily serves a special file at <my-domain>/.well-known/acme-challenge/... and Let's Encrypt's servers fetch it to confirm DNS actually points to this server.  
       (This is exactly why port 80 needs to stay open even though we'll mostly use 443 — the renewal challenge runs over plain HTTP.)

    2. Obtains the certificate.

    3. Automatically edits our Nginx config — adds a listen 443 ssl block, references the cert/key paths, and (by default) adds a redirect from 80→443.

- Resulting config addition (Certbot writes this for us, but understand it):

  ```
  server {
      listen 443 ssl;
      server_name <my-domain>;
      ssl_certificate /etc/letsencrypt/live/<my-domain>/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/<my-domain>/privkey.pem;
      # ... same proxy_pass block as before
  }
  server {
      listen 80;
      server_name <my-domain>;
      return 301 https://$host$request_uri;
  }
  ```

- Auto-renewal: Certbot's pip install sets up a systemd timer automatically:
  - **sudo systemctl list-timers | grep certbot**

  - Runs twice daily, only actually renews when within 30 days of expiry.

  - verify once with **sudo certbot renew --dry-run** so we know it's wired correctly rather than assuming.

---

### A couple of hardening

- Rate limiting at the Nginx layer (defense before requests even reach Node):

  ```
  limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

  server {
      # ...
      location / {
          limit_req zone=api_limit burst=20 nodelay;
          proxy_pass http://localhost:3000;
          # ...
      }
  }
  ```

  - caps each client IP to 10 requests/second (burst of 20 before throttling kicks in) — cheap protection against basic abuse/scraping before it ever costs us Node CPU time or a DB query.

- Hide the Nginx version

  ```
  # in /etc/nginx/nginx.conf, http block
  server_tokens off;
  ```

  - Prevents Server: nginx/1.24.0 from leaking in response headers — trivial to bypass by a determined attacker via other fingerprinting, but it's free and removes one low-effort recon signal.

- Step 1: Check our current nginx.conf structure first

  ```
  sudo cat /etc/nginx/nginx.conf
  ```

- Step 2: Edit nginx.conf

  ```
  sudo vi /etc/nginx/nginx.conf
  ```

  - Find this exact line near the top of the http block:

    ```
    http {
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    ```

  - Change it to:

    ```
    http {
        server_tokens off;
        limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    ```

  - Just insert those two new lines (plus a blank line for readability) directly after the http { opening brace, before log_format.

  - Save (Esc, :wq in vi).

- Step 3: Edit the shelfapi.conf

  ```
  sudo vi /etc/nginx/conf.d/shelfapi.conf
  ```

  - Add **limit_req zone=api_limit burst=20 nodelay;** as the first line inside our location / block, before proxy_pass, in the 443 server block specifically.

- Step 4: Validate and reload

  ```
  sudo nginx -t
  sudo systemctl reload nginx
  ```

- Step 5: Verify

  ```
  curl -I https://api.<my-domain>
  ```

  - Check the Server: header shows no version number.

    ```
    for i in {1..30}; do curl -s -o /dev/null -w "%{http_code}\n" https://api.<my-domain>; done
    ```

  - Should show 200s then some 503s once past the burst of 20.

---

### Interview-ready line:

- Nginx runs on the host rather than in a container specifically because my deploy strategy replaces the app container on every push — keeping Nginx outside that lifecycle means there's no window where the TLS-terminating layer itself goes down during a deploy, only a brief upstream reconnect while the new container starts.

---

---

## CI/CD

- the piece that actually ties everything together into "push to main → live in prod, automatically.

### The auth problem — how does GitHub Actions get AWS permissions?

- Approach A — IAM User with static access keys stored as GitHub Secrets.

  - Simple, works, but the credential is long-lived: if it leaks (accidentally logged, a compromised Action dependency, a malicious PR from a fork triggering our workflow), it's valid until we manually notice and rotate it.
  - This is genuinely fine for a personal project if we want to move fast — but not what a security-conscious setup does.

- Approach B — OIDC (OpenID Connect) federation

  - GitHub Actions can present a short-lived, cryptographically signed identity token to AWS, and AWS trusts it based on a pre-configured trust relationship — no stored keys at all, credentials are minted fresh per workflow run and expire immediately after.

---

### Set up OIDC trust (one-time AWS console setup)

- Create the OIDC Identity Provider: IAM → Identity providers → Add provider

  - Provider type: OpenID Connect

  - Provider URL: https://token.actions.githubusercontent.com

  - Audience: sts.amazonaws.com

- This tells AWS "I'm willing to trust identity tokens signed by GitHub's OIDC issuer."

- Create the Role

  - Console path: IAM → Roles → Create role

  - Trusted entity type: select Web identity

  - Identity provider: dropdown → select token.actions.
    githubusercontent.com
  - Audience: dropdown → select sts.amazonaws.com

    _There may be an optional GitHub organization field here — if present, enter DevWithAbhishek. This is a console convenience that pre-fills part of the trust condition; it's not a substitute for the sub condition we'll edit manually next._

  - Click Next

- Attach Permissions (skip built-in policies, we're building custom)

  - On the permissions page, don't select any AWS-managed policy checkbox here — click Next without checking anything.  
    We'll attach a tightly-scoped custom policy after the role is created (cleaner than trying to build it inline mid-creation).

- Name the role and create it

  - Role name: shelfapi-github-actions-role

  - Review, click Create role

- Edit the trust policy to add the sub condition

  - The role now exists, but its default trust policy (auto-generated by the console) is likely broader than we want — it may allow any sub claim, or be scoped only loosely. We need to replace it with the exact restricted version.

  - Console path: IAM → Roles → shelfapi-github-actions-role → Trust relationships tab → Edit trust policy

  - Replace the entire JSON with:

    ```
    {
    "Version": "2012-10-17",
    "Statement": [
    {
    "Effect": "Allow",
    "Principal": {
    "Federated": "arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com"
    },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
    "StringEquals": {
    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
    },
    "StringLike": {
    "token.actions.githubusercontent.com:sub": "repo:DevWithAbhishek/ShelfAPI-backend:ref:refs/heads/main"
    }
    }
    }
    ]
    }
    ```

  - Replace 123456789012 with actual AWS account ID (visible top-right in the console, or via aws sts get-caller-identity).  
    Also double-check DevWithAbhishek/ShelfAPI-backend exactly matches our real GitHub org/repo name and casing — this string match is case-sensitive and is the actual security boundary, so a typo here either breaks the workflow (too strict) or silently doesn't restrict as intended (too loose, if we typo it into matching nothing meaningfully).

  - Click Update policy (or Save changes).

- Create the custom permissions policy

  - Console path: IAM → Policies → Create policy → JSON tab

  - Paste:

    ```
    {
    "Version": "2012-10-17",
    "Statement": [
    {
    "Sid": "ECRAuth",
    "Effect": "Allow",
    "Action": "ecr:GetAuthorizationToken",
    "Resource": "_"
    },
    {
    "Sid": "ECRPush",
    "Effect": "Allow",
    "Action": [
    "ecr:BatchCheckLayerAvailability",
    "ecr:PutImage",
    "ecr:InitiateLayerUpload",
    "ecr:UploadLayerPart",
    "ecr:CompleteLayerUpload"
    ],
    "Resource": "arn:aws:ecr:us-east-1:123456789012:repository/shelfapi-backend"
    },
    {
    "Sid": "TriggerDeploy",
    "Effect": "Allow",
    "Action": "ssm:SendCommand",
    "Resource": "_"
    }
    ]
    }
    ```

  - Why ecr:GetAuthorizationToken needs Resource: "*": this is a documented AWS exception — this specific action doesn't support resource-level restriction, * is mandatory here, not a scoping mistake.

    Why the push actions ARE scoped to one repo ARN: replace us-east-1 with our actual region and 123456789012 with account ID. This is what keeps CI's push permission limited to exactly shelfapi-backend, not every ECR repo in our account.

    About ssm:SendCommand and Resource: "*": we can scope this down further to our specific EC2 instance ARN and the specific SSM document ARN (AWS-RunShellScript) for tighter restriction — worth doing once we know our instance ID won't change:

    ```
    {
    "Sid": "TriggerDeploy",
    "Effect": "Allow",
    "Action": "ssm:SendCommand",
    "Resource": [
    "arn:aws:ec2:us-east-1:123456789012:instance/i-0abcdef1234567890",
    "arn:aws:ssm:us-east-1::document/AWS-RunShellScript"
    ]
    }
    ```

  - Both resource ARNs are required together since SendCommand needs permission on both the target instance and the document being run.  
    Use * for now if we want to avoid re-editing this every time we replace the instance (e.g., during a teardown/redeploy cycle); tighten it once our instance ID is stable.

  - Click Next, name it **shelfapi-github-actions-policy**, add a description, Create policy.

- Attach the custom policy to the role

  - Console path: IAM → Roles → shelfapi-github-actions-role → Permissions tab → Add permissions → Attach policies

  - Search for shelfapi-github-actions-policy, check it, click Add permissions.

- Get the Role ARN for our workflow file

  - Console path: IAM → Roles → shelfapi-github-actions-role → top of the page, copy the ARN field:

  - arn:aws:iam::123456789012:role/shelfapi-github-actions-role

  - This is exactly what goes into our .github/workflows/deploy.yml:

    ```
    - name: Configure AWS credentials via OIDC
      uses: aws-actions/configure-aws-credentials@v4
      with:
      role-to-assume: arn:aws:iam::123456789012:role/shelfapi-github-actions-role
      aws-region: ap-south-2
    ```

---

### The GitHub Actions workflow file

- .github/workflows/deploy.yml:

  ```
  name: Deploy to Production

  on:
    push:
      branches: [main]

  permissions:
    id-token: write   # required for OIDC
    contents: read

  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v4

        - name: Install dependencies
          run: npm ci

        - name: Run tests
          run: npm test

        - name: Lint
          run: npm run lint

        - name: Configure AWS credentials via OIDC
          uses: aws-actions/configure-aws-credentials@v4
          with:
            role-to-assume: arn:aws:iam::123456789012:role/shelfapi-github-actions-role
            aws-region: us-east-1

        - name: Login to ECR
          run: |
            aws ecr get-login-password --region us-east-1 | \
            docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com

        - name: Build and push image
          run: |
            IMAGE=123456789012.dkr.ecr.us-east-1.amazonaws.com/shelfapi-backend:${{ github.sha }}
            docker build -t $IMAGE .
            docker push $IMAGE

        - name: Deploy to EC2 via SSM
          run: |
            aws ssm send-command \
              --instance-ids "i-0abcdef1234567890" \
              --document-name "AWS-RunShellScript" \
              --parameters '{"commands":["bash /home/ec2-user/deploy.sh ${{ github.sha }}"]}'
  ```

  - **permissions: id-token**: write — without this explicit permission block, the workflow can't request an OIDC token at all; a common "why is my OIDC auth failing" gotcha.

  - **Tests/lint run before any AWS interaction** — if either fails, the job stops there, nothing gets built or deployed. This is the actual meaning of "CI" (continuous integration = verify before we integrate) as distinct from "CD."

  - **configure-aws-credentials@v4** — this action handles the entire OIDC token exchange; after this step, every subsequent aws/docker login command in the job has temporary AWS credentials available as environment variables, automatically.

  - **Image tagged ${{ github.sha }}** — exactly the strategy from the ECR section, ties every deployed image back to an exact commit.

  - Final step doesn't SSH — it calls ssm send-command, which asks AWS to execute a script on the instance, authenticated via the same IAM chain, no inbound network path needed to EC2 at all from GitHub's side.

---

### The deploy script that runs on EC2

- /home/ec2-user/deploy.sh (placed on the instance once, manually, ahead of time — not part of the repo):

  ```
  #!/bin/bash
  set -e

  IMAGE_TAG=$1
  ECR_URI="123456789012.dkr.ecr.us-east-1.amazonaws.com/shelfapi-backend"

  aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_URI

  docker pull $ECR_URI:$IMAGE_TAG

  # Run Prisma migration as a one-off container, BEFORE swapping traffic
  docker run --rm --env-file /home/ec2-user/.env $ECR_URI:$IMAGE_TAG npx prisma migrate deploy

  # Swap the running container
  docker stop shelfapi-app || true
  docker rm shelfapi-app || true
  docker run -d \
    --name shelfapi-app \
    --restart unless-stopped \
    -p 3000:3000 \
    --env-file /home/ec2-user/.env \
    $ECR_URI:$IMAGE_TAG

  # Clean up old images to save disk
  docker image prune -af --filter "until=72h"
  ```

- **Why migration runs as a separate one-off docker run before the swap, not inside CMD at container start:**  
  if migrations ran automatically on every container boot, a bad migration would either:
  - (a) silently break in a way that's hard to trace back to "the migration step," or
  - (b) if we ever run multiple containers/replicas, we'd get race conditions from concurrent migration attempts (Prisma does have some lock protection, but avoiding the scenario entirely is cleaner).

  - Running it explicitly, as its own step, before the traffic-serving container even changes, means: **migration failure = set -e kills the script** = old container is untouched and still serving traffic. Failure mode is "deploy doesn't happen," never "app is half-migrated and broken in prod."

- **set -e** — this one flag is what makes the whole script fail-safe: any command returning non-zero exits the script immediately, rather than plowing ahead to the container swap with a possibly-broken image.

---

### The downtime gap — being honest about the limitation

- Between docker stop shelfapi-app and the new container passing its first successful request, there's a gap — typically a few hundred milliseconds to a couple seconds, depending on our app's cold-start time. **Nginx will return a 502** to any request landing in that exact window.

- This is a known, honest limitation of this specific architecture. The fixes, in increasing complexity:

  - _**Minor:**_ add a brief retry in Nginx (proxy_next_upstream won't help with a single upstream, but a client-side retry or accepting the blip is often fine for a personal project's traffic level).

  - _**Moderate:**_ blue-green on the single box — run new container on port 3001 while 3000's still live, health-check it, then atomically flip Nginx's proxy_pass target and reload (near-zero downtime, more scripting).

  - _**Full fix:**_ this is literally the problem ECS's rolling deployment solves natively — new tasks health-checked and added to the ALB target group before old ones are drained, zero manual scripting required.

---

### Interview-ready line:

- CI authenticates to AWS via OIDC federation, scoped by a trust policy condition to only my repo's main branch — no long-lived AWS keys exist in GitHub Secrets at all.

- The deploy itself runs Prisma migrations as an isolated one-off container before touching the live container, so a bad migration fails the deploy script via set -e without ever leaving the app in a half-migrated state."

---

---

## RDS (PostgreSQL)

### Create the RDS instance

- Console path: RDS → Databases → Create database

- Engine options: PostgreSQL. _Choose the version — pick the latest stable minor version (e.g. Postgres 16.x) unless specifically need an older version for a Prisma/extension compatibility reason._

- Choose a database creation method: Full configuration.

- Templates: this is where a genuinely important early decision lives:

  - Production: defaults to Multi-AZ enabled, larger instance class suggestions, deletion protection on

  - Dev/Test or Free tier (_**selected**_): single-AZ, smaller defaults, deletion protection off.

- Availability and durability: Single-AZ DB instance deployment (1 instance)

- Settings:

  - Engine version: Postgres 16.15-R1

  - Enable RDS Extended Support: Unchecked.

  - DB instance identifier: _**shelfapi-db**_

  - Master username: something other than postgres or admin — e.g. _**shelf_postgres**_

  - Credential management: choose "Managed in AWS Secrets Manager" rather than "Self managed."

  - Select the encryption key: aws/secretsmanager (default)

- Additional credentials settings:
  - Database authentication options: Password authentication _(Authenticates using database passwords)_

- Instance configuration

  - _**DB instance class:**_ db.t3.micro _(free tier eligible, burstable — same reasoning as EC2's t3 family: our DB is mostly idle between queries, burst credits absorb spikes)._

  - _**Storage: General Purpose SSD**_ (gp3), 20GB, _enable storage autoscaling with a reasonable max (e.g. 100GB) — this means RDS automatically grows storage if we approach the limit rather than our app failing with a disk-full error one day. Cheap insurance._

  - Additional storage configuration:
    - Storage autoscaling: Check "Enable storage autoscaling"

    - Maximum storage threshold: 100 GiB

- Multi-AZ — off

- Connectivity:

  - Compute resource: Don't connect to an EC2 compute resource

  - Network type: IPv4

  - VPC: shelfapi-vpc

  - _**DB subnet group:**_ create one _that includes our private subnet(s) — RDS requires a subnet group (minimum 2 subnets across 2 AZs, even for a single-AZ deployment, because AWS requires this for future Multi-AZ flexibility)._
    _This means we'll need to create a second private subnet in a different AZ (e.g. shelfapi-private-1b, 10.0.3.0/24) even though only one is actively used right now._

  - _**Public access:**_ No — critical, this is the setting that (combined with the subnet placement) ensures RDS has no internet-facing endpoint at all.

  - _**VPC security group:**_ select existing → shelfapi-rds-sg.

  - Availability Zone: No preference

  - RDS Proxy: Leave it unchecked.

  - Certificate authority: Default

- Monitoring:

  - Select: "Database Insights - Standard".

  - Retention Period: 7 days (free)

  - AWS KMS key: (default) aws/rds

  - Additional Monitoring settings: Leave it untouched.

- Additional configuration

  - Database options
    - Initial database name: "shelfapi"

  - DB parameter group: default-postgres.16

  - Check: Enable encryption

  - AWS KMS key: (default) aws/rds

  - Backup
    - Enable automated backup

    - Backup retention period: 7 days

    - Backup window: No preference

    - Backup tags: Copy tags to snapshots

    - Backup replicationInfo: Uncheck _Enable replication in another AWS Region_

  - Maintenance
    - Check _Enable auto minor version upgrade_

    - Maintenance window: No preference

    - Uncheck: _Enable deletion protection_

- Click "Create" and wait a few minutes.

- Get the connection details, build the connection string:

  - Once available, RDS gives us an endpoint (e.g. shelfapi-db.abc123xyz.us-east-1.rds.amazonaws.com) and port 5432.

  - Prisma's DATABASE_URL format:

    ```
    postgresql://shelfapi_admin:<password>@shelfapi-db.abc123xyz.us-east-1.rds.amazonaws.com:5432/shelfapi?schema=public
    ```

  - This goes into the .env file on EC2 (referenced by --env-file in the docker run command from the Docker section) — never committed to git, and never baked into the Docker image.

---

### Why Secrets Manager over typing a password ourself?

- WS auto-generates a strong random password and stores it as a Secrets Manager secret, which our app can fetch at runtime via SDK instead of us hand-copying a password into a .env file.

- It also supports automatic rotation (Secrets Manager can rotate the DB password on a schedule and update itself, without us touching anything) — genuinely useful, and a good "I thought about credential hygiene" talking point.

- _**Trade-off:**_ adds one more moving part — our app needs a small bit of startup logic to fetch the secret (via @aws-sdk/client-secrets-manager) rather than reading DATABASE_URL directly from env.  
  For a first pass, "Self managed" (we set the password, put the resulting connection string in our .env file on EC2, never commit it) is a perfectly reasonable simpler starting point — treat Secrets Manager as a documented future improvement.

---

### Multi-AZ — the availability decision

- What it does:

  - RDS provisions a synchronous standby replica in a second Availability Zone. If the primary fails (hardware fault, AZ outage, even routine patching), RDS automatically fails over to the standby — typically 60-120 seconds of downtime, versus potentially much longer if a single-AZ instance's underlying hardware fails and AWS has to recover/restore it.

- Cost: roughly doubles our RDS bill (we're paying for two instances' worth of compute/storage, even though only one serves traffic at a time).

---

### Prisma-specific operational concerns

- Migrations — the deploy-time step, already covered mechanically in CI/CD.

  - _**prisma migrate dev**_ — for local development only. Interactively creates new migration files by diffing your schema against the DB, and applies them. Never run this against RDS — it's designed for iterative local schema exploration, not controlled prod rollout.

  - _**prisma migrate deploy**_ — for CI/CD and prod. Applies existing, already-committed migration files in order, no interactivity, no schema drift detection/prompting. This is what your deploy.sh script runs (from the CI/CD section) as a one-off container before swapping the live app container.

- Connection pooling — the thing that will eventually bite if unaddressed.

  - Each Prisma Client instance opens a connection pool to Postgres (default size: num_physical_cpus * 2 + 1).

  - RDS db.t3.micro allows roughly 85 max connections (varies by instance class — tied to allocated RAM).

  - With one app instance, we're nowhere near this limit.

  - The problem appears the moment we either

    - (a) scale to multiple EC2/ECS instances/containers, or

    - (b) accidentally create multiple PrismaClient instances within our app instead of a single shared singleton (a very common NestJS mistake — instantiating new PrismaClient() in multiple places instead of injecting one shared service).

- _**For now:**_ make sure our NestJS PrismaService is a singleton (standard NestJS DI pattern — @Injectable() provider, injected wherever needed, one instance app-wide) — this alone prevents the most common self-inflicted version of this problem.  
  _**Future**_ scaling step, not needed now: RDS Proxy (AWS-managed connection pooler sitting between our app and RDS) — relevant once we run multiple app instances/containers and need to prevent connection exhaustion; worth knowing it exists and what problem it solves, not worth setting up on a single-instance side project.

- _**SSL:**_ RDS enforces rds.force_ssl depending on the parameter group (default parameter groups typically have this on for newer Postgres versions).  
  Add _?sslmode=require_ to our connection string if we get SSL-related connection errors — since EC2-to-RDS traffic here stays entirely inside our VPC (never crossing the public internet), this is defense-in-depth rather than a strict necessity, but there's no reason not to require it.

---

### Interview-ready line:

- RDS has no public accessibility at all — it sits in a private subnet, reachable only from my EC2 security group.

- Migrations run as an explicit prisma migrate deploy step in the deploy script, separate from application boot, so a failed migration blocks the deploy rather than leaving the app running against a half-migrated schema.

---

---

## CloudWatch

- By default, EC2 gives us basic host metrics (CPU utilization, network in/out, disk I/O) automatically, at no setup cost.

- What it doesn't give us out of the box: memory usage, disk space usage, or any of our application/Nginx logs.  
  That's what the CloudWatch agent adds.

- Why default metrics aren't enough?

  - CPU utilization alone won't tell us our API is about to fall over from a memory leak or a full disk (both very real failure modes for a Node app with unbounded caching or Docker images piling up).

  - This is the actual justification for the extra agent setup — not just "more dashboards," but visibility into the failure modes that CPU% alone hides.

### Install the CloudWatch agent on EC2

- Via SSM session:

  ```
  sudo dnf install -y amazon-cloudwatch-agent
  ```

  - The IAM role attached in the IAM section (CloudWatchAgentServerPolicy) is what authorizes this agent to actually push data — without that policy, the agent installs fine but every push silently fails with permission errors.

- Configure what gets collected:

  Create /opt/aws/amazon-cloudwatch-agent/etc/config.json:

  ```
  sudo tee /opt/aws/amazon-cloudwatch-agent/etc/config.json > /dev/null << 'EOF'
    {
      "metrics": {
        "namespace": "ShelfAPI",
        "metrics_collected": {
          "mem": { "measurement": ["mem_used_percent"] },
          "disk": { "measurement": ["used_percent"], "resources": ["/"] }
        }
      },
      "logs": {
        "logs_collected": {
          "files": {
            "collect_list": [
              {
                "file_path": "/var/log/nginx/access.log",
                "log_group_name": "/shelfapi/nginx/access",
                "log_stream_name": "{instance_id}"
              },
              {
                "file_path": "/var/log/nginx/error.log",
                "log_group_name": "/shelfapi/nginx/error",
                "log_stream_name": "{instance_id}"
              }
            ]
          }
        }
      }
    }
    EOF
  ```

  - _**metrics block**_ — adds memory and disk usage specifically, the two things not covered by default EC2 metrics. No CPU here since that's already free/automatic.

  - _**logs block**_ — ships Nginx's access/error logs into CloudWatch Logs, organized into named log groups (one per log type), with log streams per instance (relevant if we ever run more than one instance — each gets its own stream within the shared group).

- Start the agent:

  ```
  sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config -m ec2 -s \
    -c file:/opt/aws/amazon-cloudwatch-agent/etc/config.json
  ```

  Verify it's running:

  ```
  sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a status
  ```

  - Within a few minutes, CloudWatch → Metrics → ShelfAPI namespace shows memory/disk data, and CloudWatch → Log groups shows our Nginx (and app, if configured) logs streaming in.

---

### Alarms — the part that actually makes monitoring useful

- Metrics sitting in a dashboard nobody looks at is not monitoring — alarms are what turn data into an actual signal. CloudWatch → Alarms → Create alarm:

- **Create the SNS Topic (once)**

  - Console path: SNS → Topics → Create topic

  - Type: Standard (not FIFO — FIFO is for ordered/deduplicated message processing, irrelevant for simple alerts)

  - Name: shelfapi-alerts

  - Leave everything else default → Create topic

  - Subscribe the email:
    On the topic's page → Create subscription

  - Protocol: Email

  - Endpoint: our email address

  - Create subscription

  - Confirm the subscription: check the inbox — AWS sends a confirmation email immediately.  
    _We must click the confirm link, or this subscription stays in "Pending confirmation" state and will never actually deliver alerts. Easy to skip and forget — verify it shows "Confirmed" back in the SNS console before moving on._

- **Alarm 1 — High Memory Usage**

  - Console path: CloudWatch → Alarms → Create alarm → Select metric

  - Under Browse tab → click ShelfAPI.

    _It'll show sub-categories (likely something like "InstanceId" as a dimension) — click through until we see mem_used_percent listed_

  - Check the box next to mem_used_percent → click Select metric

  - Specify metric and conditions (next screen):

    - Statistic: Average
    - Period: 5 minutes (reasonable granularity — checks every 5 min)
    - Threshold type: Static
    - Whenever mem_used_percent is...: Greater than → 85

  - Additional configuration (same page, scroll down):

    - Datapoints to alarm: 2 out of 2 — this is the "2 consecutive periods" requirement.  
      _It means: 2 out of the last 2 evaluated 5-minute periods must both breach 85% before the alarm actually fires — avoids triggering off one brief spike._

  - Click Next.

  - Configure actions:

    - Alarm state trigger: In alarm

    - Send a notification to: select Select an existing SNS topic

    - Choose shelfapi-alerts from the dropdown

  - Click Next.

  - Name and description:

    - Alarm name: shelfapi-high-memory
    - Description: Memory usage above 85% for 2 consecutive periods

  - Click Next → review → Create alarm.

- **Alarm 2 — Disk Space**

  _Same flow, different metric._

- Create alarm → Select metric → Browse → ShelfAPI namespace → find disk_used_percent  
  _(it'll likely show a dimension like path or fstype : device, fstype, host, path — select the row where path = /, since that's what our config.json scoped it to)_

- Statistic: Average
- Period: 5 minutes
- Threshold: Greater than → 85
- Datapoints to alarm: 1 out of 1 is fine here
  _(disk fills gradually, less need for the "2 consecutive periods" smoothing that memory spikes need) — but 2 out of 2 works too if we'd rather match Alarm 1's pattern for consistency_

- Actions: same SNS topic, shelfapi-alerts

- Name: shelfapi-high-disk

- Create alarm.

- **Alarm 3 — Instance Status Check Failure**

  _This one's different — it's a built-in EC2 metric, not from our custom ShelfAPI namespace, so no CloudWatch agent involvement._

  - Create alarm → Select metric → Browse tab → instead of ShelfAPI, look for EC2 → Per-Instance Metrics → find our instance ID in the list → select _**StatusCheckFailed**_.

  - Statistic: Maximum _(or Average — for a 0/1 binary metric like this, both behave equivalently at period length 1)_

  - Period: 5 minutes _(or shorter, e.g. 1 minute, if we want faster detection — this metric updates roughly every minute at the EC2 level)_

  - Threshold: Greater than or equal to → 1

  - Datapoints to alarm: 1 out of 1 _— we want this to fire immediately on the first failure, no smoothing; instance-down is not something to wait-and-see on_

  - Actions: same SNS topic, shelfapi-alerts

  - Name: shelfapi-instance-status-failed

  - Create alarm.

- **Optional: test that notifications actually work**

  - Rather than waiting for a real failure, we can force-test the pipeline:

  - CloudWatch → Alarms → select shelfapi-high-memory → Actions → Edit → temporarily lower the threshold to something we know is currently true _(e.g., Greater than 1 instead of 85, since memory is always above 1%)_ → save → wait a few minutes for it to trip → confirm you get the email → then set it back to 85.

- _**Why SNS + email rather than something fancier:**_ for a personal project, an email alert is genuinely sufficient — we're not running an on-call rotation.  
  SNS can also fan out to SMS or a webhook (e.g., Slack) later with zero change to the alarms themselves, since the alarm only needs to know "notify this SNS topic," decoupled from how that notification eventually reaches us.

---

### Log retention — don't let this run up a bill silently

- By default, CloudWatch Log groups retain logs forever unless we set a retention policy — an easy-to-miss cost creep.

- **CloudWatch → Log groups → select each group → Edit retention → set to something like 30 days**.  
  For a personal project, we don't need indefinite Nginx access logs; 30 days is enough to debug anything recent without unbounded storage growth.

---

### What about our app's own logs (Node/NestJS)?

- Since our app runs in Docker, its console.log/Pino output goes to stdout, captured by Docker's own logging driver. Two options:

  - Configure Docker's awslogs log driver directly on

    ```
    docker run --log-driver=awslogs --log-opt awslogs-group=/shelfapi/app
    ```

    — sends container stdout straight to CloudWatch, no file-tailing needed, cleaner than the file-based approach above.

  - Or redirect Docker's default json-file logs to a file path and add it to the agent's collect_list like Nginx above — more moving parts, less clean.

- Recommendation: use the Docker awslogs driver for app logs — one flag change in our _deploy.sh's docker run_ command, and it's inherently structured per-container rather than requiring file-path tailing.

---

### Interview-ready line:

- Default EC2 metrics only cover CPU and network — I installed the CloudWatch agent specifically to surface memory and disk usage, since those are the failure modes that actually take down a Node app or block a deploy, and CPU alone wouldn't show either coming.

---

---

## S3

### Creating the Bucket in AWS Console

- Console path: S3 → Buckets → Create bucket

- Bucket name: shelfapi-documents

- AWS Region: same region as our EC2/RDS — keeping everything in one region means zero data transfer cost between EC2 and S3, and lower latency.

- Object Ownership: Leave as "ACLs disabled" (Bucket owner enforced).  
  _It means access is controlled entirely through bucket policies and IAM, not legacy per-object ACLs. Simpler mental model, and ACLs are considered a legacy access-control mechanism AWS is steering people away from._

- Block Public Access — leave everything checked (ON) i.e. **Block all public access: ✅ Enabled (all four sub-settings)**

  _Why: our files should never be directly, permanently public. Access happens through our app (authenticated) or through presigned URLs (time-limited, generated by our backend) — never through a permanently public bucket URL.
  Leaving Block Public Access on means even a future misconfigured bucket policy can't accidentally expose files, because this setting overrides bucket policies entirely._

- Bucket Versioning: Enable

  _Why? - if our app ever overwrites or deletes an object (a bug, an accidental delete call, a bad migration script), versioning means the previous version is still recoverable rather than permanently gone._

  _Costs a little extra storage (old versions still count toward storage billing) but at document-storage scale for a portfolio project, this is negligible — cheap insurance against a real, plausible failure mode (accidental overwrite)._

- Encryption:

  - Server-side encryption: leave default — SSE-S3 (Amazon S3-managed keys).  
    _This encrypts data at rest automatically, no cost, no key management burden on our part. (SSE-KMS is the more advanced option — gives us audit logging of every decrypt call via CloudTrail and customer-managed key rotation control — genuinely relevant for regulated data, not necessary at our scale.)_

  - Bucket Key: enable if using KMS (reduces KMS API call costs) — irrelevant if we're on SSE-S3, skip.

- Confirm "Create".

---

### CORS Configuration — only needed if the browser talks to S3 directly

- If upload flow is: **browser → our NestJS API → S3 (server-mediated)**, skip this entirely — CORS only matters when a browser makes a request directly to a different origin, and in server-mediated uploads the browser only ever talks to our API's own domain.

- If upload flow is: **browser gets a presigned URL from our API → browser uploads directly to S3** (the better pattern for large files), we need CORS configured on the bucket, because the browser (running on wherever our frontend lives) is now making a cross-origin request straight to s3.amazonaws.com.

- Console path: **our bucket → Permissions tab → Cross-origin resource sharing (CORS) → Edit**

  ```
  [
    {
      "AllowedOrigins": ["https://<my-domain>", "http://localhost:3000"],
      "AllowedMethods": ["GET", "PUT"],
      "AllowedHeaders": ["*"],
      "ExposeHeaders": ["ETag"],
      "MaxAgeSeconds": 3000
    }
  ]
  ```

  - _**AllowedOrigins**_ — our actual frontend domain(s), plus localhost for local dev.  
    Never use "*" here in a real setup — that would let any website's JavaScript upload to our bucket using a leaked/guessed presigned URL pattern, though presigned URLs are already scoped and time-limited so the practical risk is lower than it sounds — still, scope it properly since it costs nothing to be specific.

  - _**AllowedMethods**_ — PUT for direct upload, GET if we're also doing direct-download via presigned URL.

  - _**ExposeHeaders:**_ ETag — S3 returns an ETag on successful upload;your frontend JS needs this exposed to read it (browsers hide response headers from cross-origin JS by default unless explicitly exposed).

---

### NestJS Integration — SDK Setup

- Install the SDK

  ```
  npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
  ```

  - _Why @aws-sdk/client-s3 (v3) and not the older aws-sdk v2: v3 is modular (only pulls in the S3 client code, not the entire AWS SDK), actively maintained, and what AWS recommends for all new projects — v2 is in maintenance mode._

- Create the S3 module/service

  _This is the piece your project's evidence registry flagged as missing/unconfigured (src/s3/s3.service.ts)_

  ```
  import { Injectable } from '@nestjs/common';
  import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
  import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

  @Injectable()
  export class S3Service {
    private readonly s3Client: S3Client;
    private readonly bucketName = process.env.S3_BUCKET_NAME;

    constructor() {
      this.s3Client = new S3Client({
        region: process.env.AWS_REGION,
        // No credentials block at all —
        // the SDK auto-resolves them from the EC2 instance role via IMDS.
      });
    }

    async generateUploadUrl(key: string, contentType: string): Promise<string> {
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        ContentType: contentType,
      });
      return getSignedUrl(this.s3Client, command, { expiresIn: 300 }); // 5 minutes
    }

    async generateDownloadUrl(key: string): Promise<string> {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });
      return getSignedUrl(this.s3Client, command, { expiresIn: 300 });
    }

    async deleteObject(key: string): Promise<void> {
      await this.s3Client.send(
        new DeleteObjectCommand({ Bucket: this.bucketName, Key: key }),
      );
    }
  }
  ```

  - _Why no credentials are passed to new S3Client(): this is the actual payoff of the IAM instance role from earlier — the SDK's default credential provider chain checks, in order: explicit config (none here) → environment variables (none here) → the EC2 Instance Metadata Service.  
    Since our instance has shelfapi-ec2-role attached, it finds temporary credentials there automatically.  
    Never write accessKeyId/secretAccessKey into this file — that would defeat the entire point of using an instance role._

  - src/s3/s3.module.ts:

    ```
    import { Module } from '@nestjs/common';
    import { S3Service } from './s3.service';

    @Module({
      providers: [S3Service],
      exports: [S3Service],
    })
    export class S3Module {}
    ```

  - Import S3Module wherever we need file operations (e.g., our DocumentsModule).

- Environment variables

  ```
  AWS_REGION=ap-south-2
  S3_BUCKET_NAME=shelfapi-documents
  ```

  _Note: no AWS access key/secret here at all — that's the entire point. Locally (on our laptop, outside EC2), the SDK would instead fall back to our ~/.aws/credentials file (populated by aws configure under our own IAM user) — meaning local dev and prod both work with zero hardcoded keys, just different credential sources resolved automatically by the SDK._

---

### Two Upload Patterns — Which to Use

#### Pattern 1: Server-mediated upload (simpler, fine for smaller files)

- Client uploads to our NestJS endpoint → Node buffers it → Node calls PutObjectCommand directly (not presigned) to push it to S3.

  ```
  import { PutObjectCommand } from '@aws-sdk/client-s3';

  async uploadFile(key: string, body: Buffer, contentType: string) {
    await this.s3Client.send(new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
    }));
  }
  ```

  - Use with NestJS's FileInterceptor (from @nestjs/platform-express, backed by Multer) to receive the file as multipart/form-data in a controller, then pass its buffer here.

  - Trade-off: simple to reason about, but every file's bytes flow through our EC2 instance's bandwidth and briefly its memory — fine for small documents, poor for large files or high upload volume (we're paying EC2 CPU/bandwidth for what's really just a pass-through).

#### Pattern 2: Presigned URL, direct browser-to-S3 upload (better for larger files) - SELECTED

- Client asks our API for a signed URL → client uploads directly to S3 using that URL → our EC2 instance's bandwidth is never touched.

  ```
  // Controller
  @Post('upload-url')
  async getUploadUrl(@Body() dto: { filename: string; contentType: string }) {
    const key = `documents/${Date.now()}-${dto.filename}`;
    const url = await this.s3Service.generateUploadUrl(key, dto.contentType);
    return { uploadUrl: url, key };
  }
  ```

- Frontend then does:

  ```
  await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: file, // raw File object from an <input type="file">
  });
  ```

  - This is where the CORS config from Part B becomes necessary — the browser's fetch call goes straight to s3.amazonaws.com, a different origin from your frontend.

---

### Retrieval — presigned download URLs

- Rather than ever making the bucket public, generate a short-lived signed GET URL on demand:

  ```
  @Get('documents/:id/download-url')
  async getDownloadUrl(@Param('id') id: string) {
    const doc = await this.documentsService.findOne(id);
    const url = await this.s3Service.generateDownloadUrl(doc.s3Key);
    return { downloadUrl: url };
  }
  ```

  - Client redirects to or fetches from this URL — valid for 5 minutes (per the expiresIn set in the service), then expires.

  - This is what closes this project's known gap of an empty GET /docs endpoint — the response includes a working, time-limited link to the actual file rather than the file being served through Node directly.

---

### Interview-ready line:

- File uploads and downloads both go through short-lived presigned URLs rather than a public bucket or routing bytes through my app server — the browser talks to S3 directly, the bucket has all public access blocked, and my NestJS service resolves AWS credentials from the EC2 instance role, so there's no access key anywhere in the codebase or environment file.

---

---
