import CreateAddressesController from "@modules/Tourism/useCases/CreateAddresses/CreateAddressesController";
import { Router } from "express";
import ensureAuthenticated from "../middleware/ensuredAuthenticated";




const addressesRoutes = Router();

const createAddressesController = new CreateAddressesController();

addressesRoutes.post("/", ensureAuthenticated,createAddressesController.handle);

export default addressesRoutes;
