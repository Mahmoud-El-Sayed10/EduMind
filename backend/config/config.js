require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'edumind_user',
    password: process.env.DB_PASSWORD || 'edumind_pass',
    database: process.env.DB_NAME || 'edumind_db',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  test: {
    // For local or CI tests
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
};
