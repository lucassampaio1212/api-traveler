import Cities from "@modules/Tourism/infra/typeorm/entities/Cities";
import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import IPlacesRepository from "@modules/Tourism/repositories/IPlacesRepository";
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";


interface IRequest {
  city_id: string;
  places_id: string[];
}

@injectable()
export default class CreatePlacesCitiesUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository,
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ){}

  public async execute({city_id,places_id}: IRequest):Promise<Cities>{
    const citiesExists = await this.citiesRepository.findById(city_id);

    if (!citiesExists) {
      throw new AppError("citie does not exist");
    }

    const places = await this.placesRepository.findByIds(
      places_id
    );

    citiesExists.places = places;

    await this.citiesRepository.create(citiesExists);


    return citiesExists;
  }
}
