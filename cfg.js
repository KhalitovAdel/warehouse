import env from './env';

export default {
  warehouse: {
    http: {
      ...env.warehouse.http,
    },
  },
  db: {
    type: 'postgres',
    synchronize: true,
    autoLoadEntities: true,
    ...env.db,
  },
  auth: {
    saltRound: 10,
    ...env.auth,
  },
  seed: {
    user: {
      password: 'Qwerty12345',
    },
  },
};
