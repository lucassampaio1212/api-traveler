
import UsersRepositories from "@modules/Accounts/infra/typeorm/repositories/UsersRepositories";
import AppError from "@shared/errors/appError";
import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";


interface ITokenPayload {
  sub: string;
}

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
      throw new AppError("JWT token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
      const { sub: user_id } = verify(
          token,
          "7a62dcd6a72da3c7fdbba28d47ad3807"
      ) as ITokenPayload;

      const usersRepository = new UsersRepositories();

      const user = await usersRepository.findById(user_id)

      if(!user){
        throw new AppError("User does not exists!", 401)
      }


      request.user = {
        id: user_id,
    };

      return next();
  } catch {
      throw new AppError("Invalid JWT token", 401);
  }
}
