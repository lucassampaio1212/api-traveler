import IPlacesimageRepository from "@modules/Tourism/repositories/IPlacesImageRepository";
import IStorageProvider from "@shared/container/providers/StorageProviders/IStorageProviders";
import { inject, injectable } from "tsyringe";


interface IRequest {
  place_id: string;
  image_name: string;
}

@injectable()
export default class UploadImagePlaceUseCase {

  constructor(
    @inject("StorageProvider")
    private storageProvider: IStorageProvider,

    @inject("PlacesImagesRepository")
    private placesImagesRepository: IPlacesimageRepository
  ){}


  public async execute({image_name, place_id }: IRequest){
      await this.placesImagesRepository.create(place_id, image_name);
      await this.storageProvider.saveFile(image_name, "Places");
  }

}
