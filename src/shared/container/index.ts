import {container} from "tsyringe";
import "@shared/container/providers/index";

import UsersRepositories from "@modules/Accounts/infra/typeorm/repositories/UsersRepositories";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/Accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/Accounts/infra/typeorm/repositories/UsersTokenRepositories";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepositories
)

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
