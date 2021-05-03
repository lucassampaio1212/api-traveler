import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import { container } from "tsyringe";
import CreateUserUseCase from "./CreateUserUseCase";





export default class CreateUserController {


  public async handle(request: Request, response: Response):Promise<Response>{
    const {name, email, password} = request.body;


    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).json(classToClass(user));

  }
}
