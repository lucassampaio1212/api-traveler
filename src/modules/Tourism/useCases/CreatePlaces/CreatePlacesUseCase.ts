import Places from "@modules/Tourism/infra/typeorm/entities/Places";
import IPlacesRepository from "@modules/Tourism/repositories/IPlacesRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  name: string;
  description: string;
  category_id: string;
  address_id: string;

}

@injectable()
export default class CreatePlacesUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ){}


  public async execute({name,description,category_id,address_id}: IRequest): Promise<Places>{
    const places = await this.placesRepository.create({
      name,
      description,
      address_id,
      category_id
    });

    return places

  }
}
