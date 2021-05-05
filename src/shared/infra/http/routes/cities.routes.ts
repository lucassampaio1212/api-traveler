import uploadConfig from "@config/upload";
import CreateCitiesController from "@modules/Tourism/useCases/CreateCity/CreateCitiesController";
import ListCitiesController from "@modules/Tourism/useCases/ListCity/ListCitiesController";
import UploadImageCitiesController from "@modules/Tourism/useCases/UploadImageCities/UploadImageCitiesController";
import { Router } from "express";
import multer from "multer";


const citiesRoutes = Router();

const uploadCitiesImages = multer(uploadConfig)

const createCitiesController = new CreateCitiesController();

const uploadImagesCitiesController = new UploadImageCitiesController();

const listCitiesController = new ListCitiesController();

citiesRoutes.post("/", createCitiesController.handle);
citiesRoutes.post("/image/:id", uploadCitiesImages.single("image"), uploadImagesCitiesController.handle);
citiesRoutes.get("/", listCitiesController.handle);

export default citiesRoutes;
