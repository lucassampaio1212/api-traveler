import Depositions from "@modules/Tourism/infra/typeorm/entities/Depositions";
import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import IDepositionsRepository from "@modules/Tourism/repositories/IDepositionsRepository";
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";



interface IRequest {
  city_id: string;
  place_id: string;
  name: string;
  description: string
}

@injectable()
export default class CreateDepositionsUseCase {

  constructor(
    @inject("DepositionsRepository")
    private depositionsRepository: IDepositionsRepository,
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ){}


  public async execute({city_id, place_id, name,description}: IRequest): Promise<Depositions>{
    const cityExists = await this.citiesRepository.findById(city_id);

    if(!cityExists) {
      throw new AppError("City Does Not Exists",404);
    }

    const depositions = await this.depositionsRepository.create({
      city_id,
      place_id,
      name,
      description,
    });

    return depositions;
  }
}
