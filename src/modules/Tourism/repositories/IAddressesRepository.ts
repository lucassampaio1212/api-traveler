import ICreateAddressesDTO from "../dtos/ICreateAddressesDTO";
import Addresses from "../infra/typeorm/entities/Addresses";








export default interface IAddressesRepository {
  create({zip_code,street,neighborhood,number}: ICreateAddressesDTO): Promise<Addresses>
  findByNumber(number: number): Promise<Addresses>

}
