import IDepositionsImageRepository from "@modules/Tourism/repositories/IDepositionsImageRepository";
import { getRepository, Repository } from "typeorm";
import DepositionsImage from "../entities/DepositionsImages";




export default class DepositionsImageRepositories implements IDepositionsImageRepository {
  private repository: Repository<DepositionsImage>

  constructor(){
    this.repository = getRepository(DepositionsImage);
  }
  public async create(deposition_id: string, image_name: string): Promise<DepositionsImage> {
    const createImage = this.repository.create({
      deposition_id,
      image_name
    });

    await this.repository.save(createImage);

    return createImage;
  }


}
