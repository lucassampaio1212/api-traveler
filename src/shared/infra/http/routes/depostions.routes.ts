import uploadConfig from "@config/upload";
import {Router} from "express";
import multer from "multer";
import CreateDepositionsController from "@modules/Tourism/useCases/CreateDepositions/CreateDepositionsController";
import UploadImageDepositionsController from "@modules/Tourism/useCases/UploadImageDepositions/UploadImageDepositionsController";
import ensureAuthenticated from "../middleware/ensuredAuthenticated";



const depositionsRoutes = Router();

const uploadDepositionsImages = multer(uploadConfig)

const createDepositionsController = new CreateDepositionsController();

const uploadDepositionsImageController = new UploadImageDepositionsController();

depositionsRoutes.post("/:id",ensureAuthenticated,createDepositionsController.handle);
depositionsRoutes.post("/image/:id", ensureAuthenticated,uploadDepositionsImages.single("image"), uploadDepositionsImageController.handle);


export default depositionsRoutes;

