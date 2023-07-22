import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export function getConfig() {
  return {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 3306),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
  } as DataSourceOptions;
}
