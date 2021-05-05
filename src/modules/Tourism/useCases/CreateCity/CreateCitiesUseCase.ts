import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";



interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateCitiesUseCase {

  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository,
  ){}

  public async execute({name,description}: IRequest){
    const cities = await this.citiesRepository.create({
      name,
      description
    });

    return cities;
  }
}
