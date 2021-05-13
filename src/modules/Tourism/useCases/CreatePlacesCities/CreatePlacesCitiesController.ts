import { Request, Response } from "express";
import { container } from "tsyringe";
import CreatePlacesCitiesUseCase from "./CreatePlacesCitiesUseCase";




export default class CreatePlacesCitiesController {


  public async handle(request: Request, response: Response):Promise<Response>{
    const {id} = request.params;
    const {places_id} = request.body;

    const createPlacesCitiesUseCase = container.resolve(CreatePlacesCitiesUseCase);

    const city = await createPlacesCitiesUseCase.execute({
      city_id: id,
      places_id
    });

    return response.status(201).json(city);
  }
}
