import {config} from 'dotenv';

//what this does is to load the environment variables from a .env file
config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

//what this does is to load the environment variables from a .env file
export const  {PORT, NODE_ENV} = process.env;