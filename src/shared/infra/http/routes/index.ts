import { Router } from "express";
import authenticateRoutes from "./authenticate.routes";
import passwordRouter from "./password.routes";
import usersRoutes from "./users.routes";


const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/password", passwordRouter);

export default router;
