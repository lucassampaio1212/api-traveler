
import CitieImage from "@modules/Tourism/infra/typeorm/entities/CitieImages";
import ICitiesImageRepository from "@modules/Tourism/repositories/ICitiesImageRepository";
import IStorageProvider from "@shared/container/providers/StorageProviders/IStorageProviders";
import { inject, injectable } from "tsyringe";


interface IRequest {
  city_id: string;
  images_name: string;
}

@injectable()
export default class UploadImageCitiesUseCase {

  constructor(
    @inject("StorageProvider")
    private storageProvider: IStorageProvider,
    @inject("CitiesImagesRepository")
    private citiesImagesRepository: ICitiesImageRepository,
  ){}

  public async execute({ city_id, images_name }: IRequest): Promise<void> {
    await this.citiesImagesRepository.create(city_id, images_name);
    await this.storageProvider.saveFile(images_name, "cities");
}
}
