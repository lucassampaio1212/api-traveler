import CreateCategoryController from "@modules/Tourism/useCases/CreateCategory/CreateCategoryController";
import ListCategoriesController from "@modules/Tourism/useCases/ListCategory/ListCategoriesController";
import { Router } from "express";
import ensureAuthenticated from "../middleware/ensuredAuthenticated";



const categoriesRoutes = Router();


const createCategoryController = new CreateCategoryController();

const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", ensureAuthenticated,createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

export default categoriesRoutes;
