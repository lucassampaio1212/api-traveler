import ICreatePlacesDTO from "@modules/Tourism/dtos/ICreatePlacesDTO";
import IPlacesRepository from "@modules/Tourism/repositories/IPlacesRepository";
import { getRepository, Repository } from "typeorm";
import Places from "../entities/Places";





export default class PlacesRepositories implements IPlacesRepository {
  private repository: Repository<Places>

  constructor(){
    this.repository = getRepository(Places);
  }

  public async create({ name, description, category_id, address_id, id,}: ICreatePlacesDTO): Promise<Places> {
    const places =  this.repository.create({
      name,
      description,
      category_id,
      address_id,
      id,
    });

    await this.repository.save(places);

    return places;
  }

  public async list(): Promise<Places []> {
    const places = await this.repository.find();

    return places;
  }


  async findByIds(ids: string[]): Promise<Places[]> {
    const places = await this.repository.findByIds(ids);
    return places;
}


}
