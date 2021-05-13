import {container} from "tsyringe";
import "@shared/container/providers/index";

import UsersRepositories from "@modules/Accounts/infra/typeorm/repositories/UsersRepositories";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/Accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/Accounts/infra/typeorm/repositories/UsersTokenRepositories";
import ICategoriesRepository from "@modules/Tourism/repositories/ICategoriesRepository";
import CategoriesRepositories from "@modules/Tourism/infra/typeorm/repositories/CategoriesRepositories";
import CitiesRepositories from "@modules/Tourism/infra/typeorm/repositories/CitiesRepositories";
import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import ICitiesImageRepository from "@modules/Tourism/repositories/ICitiesImageRepository";
import CitiesImagesRepositories from "@modules/Tourism/infra/typeorm/repositories/CitiesImagesRepositories";
import IPlacesRepository from "@modules/Tourism/repositories/IPlacesRepository";
import PlacesRepositories from "@modules/Tourism/infra/typeorm/repositories/PlacesRepositories";
import IPlacesimageRepository from "@modules/Tourism/repositories/IPlacesImageRepository";
import PlacesImagesRepositories from "@modules/Tourism/infra/typeorm/repositories/placesImagesRepositories";
import IAddressesRepository from "@modules/Tourism/repositories/IAddressesRepository";
import AddressesRepositories from "@modules/Tourism/infra/typeorm/repositories/AddressesRepositories";
import IDepositionsRepository from "@modules/Tourism/repositories/IDepositionsRepository";
import DepositionsRepositories from "@modules/Tourism/infra/typeorm/repositories/DepositionsRepositories";
import IDepositionsImageRepository from "@modules/Tourism/repositories/IDepositionsImageRepository";
import DepositionsImageRepositories from "@modules/Tourism/infra/typeorm/repositories/DepositionsImageRepositories";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepositories
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepositories
);

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepositories
);

container.registerSingleton<ICitiesImageRepository>(
  "CitiesImagesRepository",
  CitiesImagesRepositories
);

container.registerSingleton<IPlacesRepository>(
  "PlacesRepository",
  PlacesRepositories
);

container.registerSingleton<IPlacesimageRepository>(
  "PlacesImagesRepository",
  PlacesImagesRepositories
);

container.registerSingleton<IAddressesRepository>(
  "AddressesRepository",
  AddressesRepositories
);

container.registerSingleton<IDepositionsRepository>(
  "DepositionsRepository",
  DepositionsRepositories
);

container.registerSingleton<IDepositionsImageRepository>(
  "DepositionsImageRepository",
  DepositionsImageRepositories
)
