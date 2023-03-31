FROM node:18

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN npm install

# Bundle app source
COPY . .

# RUN npm run db:setup

# EXPOSE 3000
# CMD [ "npm", "run", "dev" ]
