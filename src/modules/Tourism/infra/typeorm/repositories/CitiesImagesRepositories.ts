import ICitiesImageRepository from "@modules/Tourism/repositories/ICitiesImageRepository";
import { getRepository, Repository } from "typeorm";
import CitieImage from "../entities/CitieImages";






export default class CitiesImagesRepositories implements ICitiesImageRepository {
  private repository: Repository<CitieImage>

  constructor(){
    this.repository = getRepository(CitieImage);
  }

  public async create(city_id: string, image_name: string): Promise<CitieImage> {
    const citiesImage = this.repository.create({
      city_id,
      image_name
    });
    await this.repository.save(citiesImage);

    return citiesImage;
  }
}
