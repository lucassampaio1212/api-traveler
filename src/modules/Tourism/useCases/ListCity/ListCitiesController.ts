import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCitiesUseCase from "./ListCitiesUseCase";




export default class ListCitiesController {


  public async handle(request: Request, response: Response):Promise<Response>{

    const listCitiesUseCase = container.resolve(ListCitiesUseCase);

    const cities = await listCitiesUseCase.execute();

    return response.status(200).json(cities);


  }
}
