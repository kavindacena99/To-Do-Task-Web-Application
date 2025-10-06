# Use official Node image
FROM node:24.5.0

WORKDIR /app

# Copy package files first (for better layer caching)
COPY package*.json ./

# Clean install dependencies
RUN npm install

# Copy the rest of your frontend code
COPY . .

# Expose Vite port
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev"]