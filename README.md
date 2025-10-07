# Moodie
A **MERN Stack** web application for analyzing sentiment in text.

<img src="https://github.com/puneeth072003/Moodie/assets/119479391/0642746b-9154-41f8-9a7d-e752b007b645" alt="Logo" style="float:right;">

This project is a sentiment analysis application built using the MERN Stack:
- Frontend: React.js
- Backend: Node.js with Express.js
- Sentiment Analysis Engine: VADER

## Working
- A React-Node.js project created for evaluating an individual’s digital,social
well-being through sentiment analysis using VADER.
- The project aims to analyze Reddit posts, assessing negativity, positivity,
neutrality, and estimating overall mental health of the individual.

## Getting Started (Local Development)
- Clone the repository.
- Start frontend app: 
  ```
  cd Moodie && npm run dev
  ```
- Start the backend server:
  ```
  npm install
  ```
- Visit `http://localhost:5173` in your browser.

## Global Deployment with Render.com (Free)

This guide will help you deploy the Moodie application globally for free using Render.com.

### Prerequisites

1. A [Render.com](https://render.com) account
2. Git repository with your Moodie application code

### Deployment Steps

#### 1. Fork or Clone the Repository

Ensure you have the complete Moodie application code in a Git repository that you can connect to Render.

#### 2. Connect to Render

1. Log in to your Render account
2. Click on "New" and select "Blueprint"
3. Connect your Git repository
4. Render will automatically detect the `render.yaml` configuration file

#### 3. Configure Services

The `render.yaml` file already defines two services:

- **moodie-backend**: The Node.js backend API
- **moodie-frontend**: The React frontend application

Render will automatically configure these services based on the YAML file.

#### 4. Deploy

1. Click "Apply Blueprint"
2. Render will start building and deploying both services
3. Wait for the deployment to complete

#### 5. Access Your Application

Once deployed, you can access your application at:

- Frontend: `https://moodie-frontend.onrender.com`
- Backend API: `https://moodie-backend.onrender.com`

### Free Tier Limitations

Please be aware of Render's free tier limitations:

1. Free web services are automatically spun down after 15 minutes of inactivity
2. They will spin up again when a new request comes in, but there might be a delay
3. Limited to 750 hours of runtime per month
4. Limited outbound bandwidth
