import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCitiesUseCase from "./CreateCitiesUseCase";




export default class CreateCitiesController {


  public async handle(request: Request, response: Response): Promise<Response> {
      const {name, description} = request.body;

      const createCitiesUseCase = container.resolve(CreateCitiesUseCase);

      await createCitiesUseCase.execute({ name, description});

      return response.status(201).send();

  }
}
