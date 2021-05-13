import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateDepositionsUseCase from "./CreateDepositionsUseCase";





export default class CreateDepositionsController {


  public async handle(request:Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
      place_id,
      name,
      description,
    } = request.body;


    const createDepositionsUseCase = container.resolve(CreateDepositionsUseCase);

   const deposition = await createDepositionsUseCase.execute({
      city_id: id,
      place_id,
      name,
      description
    });

    return response.status(201).json(deposition);
  }
}
