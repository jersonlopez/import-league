import * as dotenv from 'dotenv';

dotenv.config();

enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
}

type DBEnv = {
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}

interface Env {
  env: NodeEnv;
  port: number;
  baseApiUrl: string;
  apiToken: string;
  database: DBEnv;
}

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  port: Number(process.env.APP_PORT) || 5000,
  baseApiUrl: process.env.BASE_API_URL || 'https://api.football-data.org/v4',
  apiToken: process.env.API_TOKEN || 'd74f640d3e9f44b89b8278cf84329fc0',
  database: {
    host: process.env.DB_HOST || 'host',
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME || 'db_name',
    username: process.env.DB_USERNAME || 'db_username',
    password: process.env.DB_PASSWORD || 'db_password'
  }
};
