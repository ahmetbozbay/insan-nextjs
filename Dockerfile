# Use official Node.js 22 image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full project
COPY . .

# Expose the Next.js dev server port
EXPOSE 3000

# Default command for development
CMD ["npm", "run", "dev"]
