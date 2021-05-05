import CreateCategoryController from "@modules/Tourism/useCases/CreateCategory/CreateCategoryController";
import ListCategoriesController from "@modules/Tourism/useCases/ListCategory/ListCategoriesController";
import { Router } from "express";



const categoriesRoutes = Router();


const createCategoryController = new CreateCategoryController();

const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

export default categoriesRoutes;
