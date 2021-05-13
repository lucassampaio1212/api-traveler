
import IDepositionsImageRepository from "@modules/Tourism/repositories/IDepositionsImageRepository";
import IStorageProvider from "@shared/container/providers/StorageProviders/IStorageProviders";
import { inject, injectable } from "tsyringe";


interface IRequest {
  deposity_id: string;
  images_name: string;
}

@injectable()
export default class UploadImageDepositionsUseCase {

  constructor(
    @inject("DepositionsImageRepository")
    private depositionsImageRepository: IDepositionsImageRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider,
  ){}

  public async execute({ deposity_id, images_name }: IRequest): Promise<void> {
    await this.depositionsImageRepository.create(deposity_id, images_name);
    await this.storageProvider.saveFile(images_name, "image");
}
}
