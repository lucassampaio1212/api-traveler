import {container} from "tsyringe";


import UsersRepositories from "@modules/Accounts/infra/typeorm/repositories/UsersRepositories";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";




container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepositories
)

