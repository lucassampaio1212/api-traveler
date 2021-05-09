import Places from "@modules/Tourism/infra/typeorm/entities/Places";
import IPlacesRepository from "@modules/Tourism/repositories/IPlacesRepository";
import { inject, injectable } from "tsyringe";





@injectable()
export default class ListPlacesUseCase {

  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ){}

  public async execute():Promise<Places[]>{
    const places = await this.placesRepository.list();

    return places;

  }
}
