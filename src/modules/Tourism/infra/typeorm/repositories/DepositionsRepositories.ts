import ICreateDepositionsDTO from "@modules/Tourism/dtos/ICreateDepositionsDTO";
import IDepositionsRepository from "@modules/Tourism/repositories/IDepositionsRepository";
import { getRepository, Repository } from "typeorm";
import Depositions from "../entities/Depositions";





export default class DepositionsRepositories implements IDepositionsRepository {
  private repository: Repository<Depositions>

  constructor(){
    this.repository = getRepository(Depositions);
  }
  public async create({ city_id, place_id, name, description }: ICreateDepositionsDTO): Promise<Depositions> {
    const depositions = this.repository.create({
      city_id,
      place_id,
      name,
      description,
    });
    await this.repository.save(depositions);

    return depositions;
  }




}
