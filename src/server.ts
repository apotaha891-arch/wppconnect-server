import dotenv from 'dotenv';
import config from './config';
import { initServer } from './index';

// Initialize environment variables
dotenv.config();

// Merge environment variables into config
const serverConfig = {
  ...config,
  ...(process.env.SECRET_KEY && { secretKey: process.env.SECRET_KEY }),
  ...(process.env.PORT && { port: process.env.PORT }),
  ...(process.env.WPP_WEBHOOK_URL && { webhook: { ...config.webhook, url: process.env.WPP_WEBHOOK_URL } }),
};

initServer(serverConfig);
