import Cities from "@modules/Tourism/infra/typeorm/entities/Cities";
import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";





@injectable()
export default class ListCitiesUseCase {

  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository,
  ){}

  public async execute():Promise<Cities[]>{
    const cities = await this.citiesRepository.list();

    return cities;
  }
}
