import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const Mysql = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

export default Mysql;
