import { DataSource } from "typeorm";
import { User } from "./entity/User";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "dev",
  password: "dev01",
  database: "Movies",
  synchronize: true,
  logging: true,
  entities: [User]
})

export const Init = AppDataSource.initialize()