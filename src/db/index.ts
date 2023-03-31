import "reflect-metadata"
import { DataSource } from "typeorm";
import { config } from "../config";
import * as dbEntities from './entities';
import * as dbMigrations from './migrations';

const { database } = config

export const AppDataSource = new DataSource({
  type: "postgres",
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  database: database.name,
  synchronize: false,
  logging: true,
  entities: [...Object.values(dbEntities)],
  migrations: [...Object.values(dbMigrations)],
  subscribers: [],
});
