import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateAddressesUseCase from "./CreateAddressesUseCase";




export default class CreateAddressesController {


  public async handle(request: Request, response: Response):Promise<Response>{
    const {
      zip_code,
      street,
      neighborhood,
      number
    } = request.body;


    const createAddressesUseCase = container.resolve(CreateAddressesUseCase);

    const addresses = await createAddressesUseCase.execute({
      zip_code,
      street,
      neighborhood,
      number
    });

    return response.status(201).json(addresses);

  }
}
