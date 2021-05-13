import CreatePlacesController from "@modules/Tourism/useCases/CreatePlaces/CreatePlacesController";
import UploadImagePlacesController from "@modules/Tourism/useCases/UploadImagesPlaces/UploadImageController";
import uploadConfig from "@config/upload";
import {Router} from "express";
import multer from "multer";
import ListPlacesController from "@modules/Tourism/useCases/ListPlaces/ListPlacesController";
import ensureAuthenticated from "../middleware/ensuredAuthenticated";



const placesRoutes = Router();

const uploadPlaceImages = multer(uploadConfig)

const createPlacesController = new CreatePlacesController();
const uploadImagePlaces = new UploadImagePlacesController();
const listPlacesController = new ListPlacesController();

placesRoutes.post("/", ensureAuthenticated,createPlacesController.handle);
placesRoutes.post("/image/:id", uploadPlaceImages.single("image"), ensureAuthenticated,uploadImagePlaces.handle);
placesRoutes.get("/", listPlacesController.handle);

export default placesRoutes;
