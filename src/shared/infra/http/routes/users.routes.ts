import CreateUserController from "@modules/Accounts/useCases/CreateUser/CreateUserController";
import UpdateUserAvatarController from "@modules/Accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";
import { Router } from "express";
import ensureAuthenticated from "../middleware/ensuredAuthenticated";
import multer from "multer";
import uploadConfig from "config/upload";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig);


usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export default usersRoutes;
