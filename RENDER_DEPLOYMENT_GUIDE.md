# Moodie Application - Render.com Deployment Guide

This step-by-step guide will help you deploy the Moodie application globally for free using Render.com.

## Step 1: Create a Render.com Account

1. Go to [Render.com](https://render.com) and sign up for a free account
2. Verify your email address

## Step 2: Connect Your Repository

1. Log in to your Render dashboard
2. Click on "New" in the top right corner
3. Select "Blueprint" from the dropdown menu
4. Connect your GitHub or GitLab account
5. Select the repository containing your Moodie application

## Step 3: Deploy Using Blueprint

Render will automatically detect the `render.yaml` file in your repository and configure the services accordingly.

1. Review the services that will be created:
   - moodie-backend (Web Service)
   - moodie-frontend (Web Service)
2. Click "Apply Blueprint"
3. Wait for the deployment process to complete

## Step 4: Configure Environment Variables (if needed)

If you need to set additional environment variables:

1. Go to the service in your Render dashboard
2. Click on "Environment" in the left sidebar
3. Add any required environment variables
4. Click "Save Changes"

## Step 5: Access Your Deployed Application

Once the deployment is complete:

1. Find the service URLs in your Render dashboard
   - Backend: `https://moodie-backend.onrender.com`
   - Frontend: `https://moodie-frontend.onrender.com`
2. Visit the frontend URL to access your application

## Step 6: Monitor Your Application

1. Use the Render dashboard to monitor your services
2. Check logs for any errors or issues
3. Monitor resource usage to stay within free tier limits

## Free Tier Limitations

- **Automatic Spin Down**: Free services are automatically spun down after 15 minutes of inactivity
- **Spin Up Delay**: When a new request comes in, the service will spin up again, but there might be a 30-60 second delay
- **Monthly Hours**: Limited to 750 hours of runtime per month
- **Bandwidth**: Limited outbound bandwidth
- **No Custom Domains**: Free tier doesn't support custom domains

## Troubleshooting

### Service Not Starting

1. Check the service logs in the Render dashboard
2. Verify that all required environment variables are set
3. Ensure the health check endpoint is responding correctly

### Frontend Not Connecting to Backend

1. Check that the BACKEND_URL environment variable is correctly set
2. Verify that the backend service is running
3. Check for CORS issues in the browser console

### Deployment Failing

1. Check the build logs for errors
2. Ensure your Dockerfiles are correctly configured
3. Verify that the render.yaml file is valid

## Upgrading (Optional)

If you need more resources or features:

1. Go to your Render dashboard
2. Click on "Billing" in the left sidebar
3. Select a paid plan that meets your needs
4. Update your services to use the new plan