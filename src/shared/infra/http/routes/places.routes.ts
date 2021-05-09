import CreatePlacesController from "@modules/Tourism/useCases/CreatePlaces/CreatePlacesController";
import UploadImagePlacesController from "@modules/Tourism/useCases/UploadImagesPlaces/UploadImageController";
import uploadConfig from "@config/upload";
import {Router} from "express";
import multer from "multer";
import ListPlacesController from "@modules/Tourism/useCases/ListPlaces/ListPlacesController";



const placesRoutes = Router();

const uploadPlaceImages = multer(uploadConfig)

const createPlacesController = new CreatePlacesController();
const uploadImagePlaces = new UploadImagePlacesController();
const listPlacesController = new ListPlacesController();

placesRoutes.post("/", createPlacesController.handle);
placesRoutes.post("/image/:id", uploadPlaceImages.single("image"), uploadImagePlaces.handle);
placesRoutes.get("/", listPlacesController.handle);

export default placesRoutes;
