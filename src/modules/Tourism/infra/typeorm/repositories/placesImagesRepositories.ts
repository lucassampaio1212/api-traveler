import IPlacesimageRepository from "@modules/Tourism/repositories/IPlacesImageRepository";
import { getRepository, Repository } from "typeorm";
import PlacesImage from "../entities/PlacesImage";




export default class PlacesImagesRepositories implements IPlacesimageRepository {
  private repository: Repository<PlacesImage>

  constructor(){
    this.repository = getRepository(PlacesImage);
  }
  public async create(place_id: string, image_name: string): Promise<PlacesImage> {
    const placeImage = this.repository.create({
      place_id,
      image_name
    });

    await this.repository.save(placeImage);

    return placeImage;
  }


}
