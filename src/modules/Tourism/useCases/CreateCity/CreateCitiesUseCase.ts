import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";



interface IRequest {
  name: string;
  description: string;
  id?: string;
}

@injectable()
export default class CreateCitiesUseCase {

  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository,
  ){}

  public async execute({name,description,id,}: IRequest){
    const cities = await this.citiesRepository.create({
      name,
      description,
      id
    });

    return cities;
  }
}
