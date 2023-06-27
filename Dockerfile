# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the NestJS application listens on
EXPOSE 3000

# Start the NestJS application
CMD ["yarn", "start"]
