export default {
  warehouse: {
    http: {
      port: process.env.WAREHOUSE_PORT ? +process.env.WAREHOUSE_PORT : 5000,
    },
  },
  db: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'Benq1234',
    database: process.env.DATABASE_NAME || 'db',
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || '0tqTob3ibhbZqhyq8HuT',
  },
};
