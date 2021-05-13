import uploadConfig from "@config/upload";
import CreateCitiesController from "@modules/Tourism/useCases/CreateCity/CreateCitiesController";
import CreatePlacesCitiesController from "@modules/Tourism/useCases/CreatePlacesCities/CreatePlacesCitiesController";
import ListCitiesController from "@modules/Tourism/useCases/ListCity/ListCitiesController";
import UploadImageCitiesController from "@modules/Tourism/useCases/UploadImageCities/UploadImageCitiesController";
import { Router } from "express";
import multer from "multer";
import ensureAuthenticated from "../middleware/ensuredAuthenticated";


const citiesRoutes = Router();

const uploadCitiesImages = multer(uploadConfig)

const createCitiesController = new CreateCitiesController();

const uploadImagesCitiesController = new UploadImageCitiesController();

const listCitiesController = new ListCitiesController();

const createPlacesCitiesController = new CreatePlacesCitiesController();

citiesRoutes.post("/", ensureAuthenticated , createCitiesController.handle);
citiesRoutes.post("/image/:id", ensureAuthenticated,uploadCitiesImages.single("image"), uploadImagesCitiesController.handle);
citiesRoutes.post("/places/:id", ensureAuthenticated,createPlacesCitiesController.handle);
citiesRoutes.get("/", listCitiesController.handle);

export default citiesRoutes;
