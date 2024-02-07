module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'NestJs01',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
  