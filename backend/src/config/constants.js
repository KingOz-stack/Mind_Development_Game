// constants.js

// Environment Variables from .env file
const dotenv = require('dotenv');

dotenv.config();  // Ensure dotenv is used for environment variables
 
module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'your-default-secret',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  API_KEY: process.env.API_KEY,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION || '1h',
  // Add more constants as needed
};

 