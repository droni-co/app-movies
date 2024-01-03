import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Saga } from "./entity/Saga";
import { Movie } from "./entity/Movie";
import { Video } from "./entity/Video";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "dev",
  password: "dev01",
  database: "Movies",
  synchronize: true,
  logging: true,
  entities: [User, Saga, Movie, Video]
})

export const Init = AppDataSource.initialize()