import { Router } from "express";
import authenticateRoutes from "./authenticate.routes";
import categoriesRoutes from "./categories.routes";
import citiesRoutes from "./cities.routes";
import passwordRouter from "./password.routes";
import usersRoutes from "./users.routes";


const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/password", passwordRouter);
router.use("/categories", categoriesRoutes);
router.use("/cities", citiesRoutes);

export default router;
