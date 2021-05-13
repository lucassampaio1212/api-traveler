import { Router } from "express";
import addressesRoutes from "./addresses.routes";
import authenticateRoutes from "./authenticate.routes";
import categoriesRoutes from "./categories.routes";
import citiesRoutes from "./cities.routes";
import depositionsRoutes from "./depostions.routes";
import passwordRouter from "./password.routes";
import placesRoutes from "./places.routes";
import usersRoutes from "./users.routes";


const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/password", passwordRouter);
router.use("/categories", categoriesRoutes);
router.use("/cities", citiesRoutes);
router.use("/places", placesRoutes);
router.use("/addresses", addressesRoutes);
router.use("/depositions", depositionsRoutes);

export default router;
