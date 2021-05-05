import ICreateCitiesDTO from "@modules/Tourism/dtos/ICreateCitiesDTO";
import ICitiesRepository from "@modules/Tourism/repositories/ICitiesRepository";
import { getRepository, Repository } from "typeorm";
import Cities from "../entities/Cities";





export default class CitiesRepositories implements ICitiesRepository {
  private repository: Repository<Cities>

  constructor(){
    this.repository = getRepository(Cities)
  }
 public async create({ name, description }: ICreateCitiesDTO):Promise<Cities> {
   const cities = this.repository.create({
     name,
     description
   });

   await this.repository.save(cities);

   return cities;
  }

  public async findById(id: string): Promise<Cities> {
      const cities = await this.repository.findOne(id);

      return cities;
  }

  public async list(): Promise<Cities[]> {
    const cities = await this.repository.find();

    return cities;
  }



}
