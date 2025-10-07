# Moodie Application - Fly.io Deployment Guide

This guide will help you deploy the Moodie application globally for free using Fly.io.

## Step 1: Create a Fly.io Account

1. Go to [Fly.io](https://fly.io) and sign up for a free account
2. Install the Fly CLI by following the instructions at [https://fly.io/docs/hands-on/install-flyctl/](https://fly.io/docs/hands-on/install-flyctl/)
3. Authenticate with the CLI by running `fly auth login`

## Step 2: Create a fly.toml Configuration File

Create a `fly.toml` file in the root of your project with the following content:

```toml
# fly.toml - Backend Configuration
app = "moodie-backend"
primary_region = "ewr"

[build]
  dockerfile = "Dockerfile"

[env]
  NODE_ENV = "production"

[http_service]
  internal_port = 5000
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]

[[http_service.checks]]
  grace_period = "10s"
  interval = "30s"
  method = "GET"
  path = "/metrics"
  protocol = "http"
  timeout = "5s"
```

Create another `fly.toml` file in the Frontend directory:

```toml
# Frontend/fly.toml - Frontend Configuration
app = "moodie-frontend"
primary_region = "ewr"

[build]
  dockerfile = "Dockerfile"

[env]
  BACKEND_URL = "https://moodie-backend.fly.dev"

[http_service]
  internal_port = 80
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]
```

## Step 3: Deploy the Backend

1. Navigate to the root directory of your project
2. Run the following command to deploy the backend:

```bash
fly launch --name moodie-backend --dockerfile Dockerfile --no-deploy
fly deploy
```

3. This will deploy your backend service to Fly.io

## Step 4: Deploy the Frontend

1. Navigate to the Frontend directory
2. Run the following command to deploy the frontend:

```bash
fly launch --name moodie-frontend --dockerfile Dockerfile --no-deploy
fly deploy
```

3. This will deploy your frontend service to Fly.io

## Step 5: Access Your Deployed Application

Once the deployment is complete:

1. Access your backend at `https://moodie-backend.fly.dev`
2. Access your frontend at `https://moodie-frontend.fly.dev`

## Free Tier Limitations

Fly.io's free tier includes:

- 3 shared-cpu-1x 256MB VMs
- 3GB persistent volume storage
- 160GB outbound data transfer

The free tier is suitable for small applications with moderate traffic. Your application will automatically scale down to zero when not in use, which helps conserve your free resources.

## Monitoring and Logs

1. View logs for your application:

```bash
fly logs -a moodie-backend
fly logs -a moodie-frontend
```

2. Monitor your application's status:

```bash
fly status -a moodie-backend
fly status -a moodie-frontend
```

## Troubleshooting

### Deployment Failures

1. Check the deployment logs:

```bash
fly logs -a moodie-backend
```

2. Verify your Dockerfile is correctly configured
3. Ensure your application is listening on the correct port

### Connection Issues

1. Check that the BACKEND_URL environment variable is correctly set
2. Verify that both services are running:

```bash
fly status -a moodie-backend
fly status -a moodie-frontend
```

### Resource Limitations

If you're hitting resource limits:

1. Consider optimizing your application
2. Upgrade to a paid plan if necessary

## Scaling (Optional)

To scale your application:

```bash
fly scale count 2 -a moodie-backend
```

This will increase the number of instances to 2, but note that this may exceed the free tier limits.