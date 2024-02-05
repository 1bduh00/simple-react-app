# Base image for building the React app
FROM node:16-alpine AS builder

# Working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the React app for production
RUN npm run build

# Second stage: Serve the React app using a lightweight Nginx image
FROM nginx:1.23-alpine

# Copy built React app files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy Nginx configuration for serving React app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]