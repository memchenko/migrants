const url = process.env.URL;

export default () => ({
  type: 'cockroachdb',
  url,
  entities: [__dirname + '/../entities/**/*.entity.ts'],
  migrations: [__dirname + '/../migrations/*.ts'],
  synchronize: true,
  autoLoadEntities: true,
  ssl: {
    requestCert: true,
    rejectUnauthorized: process.env.NODE_ENV === 'prod' ? true : false,
    ca: process.env.NODE_ENV === 'prod' ? process.env.CA_CERT : '',
  },
  cli: {
    entitiesDir: __dirname + '/../entities',
    migrationsDir: __dirname + '/../migrations',
  },
});
