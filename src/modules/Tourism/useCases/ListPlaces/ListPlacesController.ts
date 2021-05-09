import { Request, Response } from "express";
import { container } from "tsyringe";
import ListPlacesUseCase from "./ListPlacesUseCase";





export default class ListPlacesController {


  public async handle(request:Request, response: Response):Promise<Response>{

    const listPlacesUseCase = container.resolve(ListPlacesUseCase);

    const places = await listPlacesUseCase.execute();

    return response.status(200).json(places);

  }
}
