import CreateUserController from "@modules/Accounts/useCases/CreateUser/CreateUserController";
import { Router } from "express";


const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export default usersRoutes;
