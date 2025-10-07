# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY --from=build /app/nginx.conf /etc/nginx/templates/default.conf.template

# Install envsubst for environment variable substitution
RUN apk add --no-cache bash

# Create startup script to replace environment variables
RUN echo '#!/bin/bash\nenvsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf\nnginx -g "daemon off;"' > /docker-entrypoint.sh \
    && chmod +x /docker-entrypoint.sh

# Expose port
EXPOSE 80

# Start Nginx with environment variable substitution
CMD ["/docker-entrypoint.sh"]