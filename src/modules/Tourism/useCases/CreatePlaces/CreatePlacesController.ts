import { Request, Response } from "express";
import { container } from "tsyringe";
import CreatePlacesUseCase from "./CreatePlacesUseCase";






export default class CreatePlacesController {


  public async handle(request: Request, response: Response): Promise<Response>{
    const {name, description, category_id, address_id} = request.body;

    const createPlacesUseCase = container.resolve(CreatePlacesUseCase);

    const places = await createPlacesUseCase.execute({
      name,
      description,
      category_id,
      address_id
    });

    return response.status(201).json(places);


  }
}
