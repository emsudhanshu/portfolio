# EC2 Deployment

This repo deploys like this:

Push to `master` -> GitHub Actions -> Docker build -> Amazon ECR -> SSH to EC2 -> pull new image -> restart container

## Why your old workflow looked successful but showed old changes

Your previous deploy script did this on EC2:

- `cd ~/portfolio`
- `git fetch` / `git reset`
- `docker build -t portfolio-app .`
- `docker run portfolio-app`

But the logs showed:

- `fatal: not a git repository`
- `failed to read dockerfile: open Dockerfile: no such file or directory`

That means EC2 never got the new code and never built a new image. Docker then started the old local image named `portfolio-app`, so the site stayed unchanged even though the action step ended successfully.

## One-time EC2 setup

1. Launch an EC2 instance in the same AWS region as ECR.
2. In the EC2 security group, allow:
   - `22` from your IP
   - `80` from `0.0.0.0/0`
3. Copy the bootstrap script to EC2 and run it:

```bash
scp ./scripts/bootstrap-ec2.sh <your-ec2-user>@<your-ec2-host>:/tmp/bootstrap-ec2.sh
ssh <your-ec2-user>@<your-ec2-host> "chmod +x /tmp/bootstrap-ec2.sh && /tmp/bootstrap-ec2.sh"
```

## GitHub repo secrets required

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `EC2_HOST`
- `EC2_USERNAME`
- `EC2_SSH_KEY`
- `REACT_APP_GEMINI_API_KEY` if you want the chatbot in production

Optional:

- `AWS_SESSION_TOKEN`

## Important PEM note

The local PEM file must not be committed. Paste its full contents into the GitHub secret `EC2_SSH_KEY`.

## Workflow defaults

- ECR repository: `portfolio`
- Container name: `portfolio-app`
- Host port: `80`
