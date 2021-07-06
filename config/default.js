module.exports = {
  http: {
    port: 5000,
  },
  db: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Benq1234',
    database: 'web',
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || '0tqTob3ibhbZqhyq8HuT',
    saltRound: 10,
  }
};
