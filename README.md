# Elemesid Project

A modern web application built with Next.js.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment to Heroku](#deployment-to-heroku)
  - [Setting up Heroku Account](#setting-up-heroku-account)
  - [Preparing for Deployment](#preparing-for-deployment)
  - [Deployment Steps](#deployment-steps)
- [Environment Variables](#environment-variables)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd elemesid
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Project

1. For development:
```bash
npm run dev
# or
yarn dev
```

2. For production:
```bash
npm run build
npm start
# or
yarn build
yarn start
```

The application will be available at `http://localhost:3000`

## Deployment to Heroku

### Setting up Heroku Account

1. Create a Heroku account:
   - Go to [Heroku's website](https://signup.heroku.com/)
   - Fill in your details and create an account
   - Verify your email address

2. Install Heroku CLI:
```bash
# For Windows (using scoop)
scoop install heroku-cli

# For macOS
brew tap heroku/brew && brew install heroku

# For Ubuntu
sudo snap install --classic heroku
```

### Preparing for Deployment

1. Login to Heroku CLI:
```bash
heroku login
```

2. Create a new Heroku app:
```bash
heroku create your-app-name
```

3. Add the following buildpacks:
```bash
heroku buildpacks:set heroku/nodejs
```

### Deployment Steps

1. Configure your project for Heroku:
   - Ensure you have a `Procfile` in your root directory:
```bash
echo "web: npm start" > Procfile
```

2. Set up environment variables on Heroku:
```bash
heroku config:set NODE_ENV=production
```

3. Deploy your application:
```bash
# Add Heroku as a remote
git remote add heroku https://git.heroku.com/your-app-name.git

# Push to Heroku
git push heroku main
```

4. Open your deployed application:
```bash
heroku open
```