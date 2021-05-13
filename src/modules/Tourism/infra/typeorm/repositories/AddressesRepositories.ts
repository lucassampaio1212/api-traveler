import ICreateAddressesDTO from "@modules/Tourism/dtos/ICreateAddressesDTO";
import IAddressesRepository from "@modules/Tourism/repositories/IAddressesRepository";
import { getRepository, Repository } from "typeorm";
import Addresses from "../entities/Addresses";


export default class AddressesRepositories implements IAddressesRepository {
  private repository: Repository<Addresses>

  constructor(){
    this.repository = getRepository(Addresses);
  }

  public async create({ zip_code, street, neighborhood, number }: ICreateAddressesDTO): Promise<Addresses> {
    const addresses = this.repository.create({
      zip_code,
      street,
      neighborhood,
      number,
    });

    await this.repository.save(addresses);

    return addresses;
  }

  public async findByNumber(number: number): Promise<Addresses> {
    const numberAddresses = await this.repository.findOne({number});

    return numberAddresses;
  }



}
