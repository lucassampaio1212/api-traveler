import Addresses from "@modules/Tourism/infra/typeorm/entities/Addresses";
import IAddressesRepository from "@modules/Tourism/repositories/IAddressesRepository";
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";


interface IRequest {
  zip_code: number;
  street: string;
  neighborhood: string;
  number: number;
}

@injectable()
export default class CreateAddressesUseCase {
  constructor(
    @inject("AddressesRepository")
    private addressesRepository: IAddressesRepository

  ){}


  public async execute({zip_code,street,neighborhood,number}: IRequest): Promise<Addresses>{
    const numberAddressesExists = await this.addressesRepository.findByNumber(number);

    if(numberAddressesExists) {
      throw new AppError("Number already exists.")
    }

    const addresses = await this.addressesRepository.create({
      zip_code,
      street,
      number,
      neighborhood
    });

    return addresses;

  }
}
