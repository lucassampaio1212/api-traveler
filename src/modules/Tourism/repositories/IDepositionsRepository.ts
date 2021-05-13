import ICreateDepositionsDTO from "../dtos/ICreateDepositionsDTO";
import Depositions from "../infra/typeorm/entities/Depositions";





export default interface IDepositionsRepository{
  create({city_id,place_id,name,description}: ICreateDepositionsDTO):Promise<Depositions>

}
