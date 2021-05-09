import ICreatePlacesDTO from "../dtos/ICreatePlacesDTO";
import Places from "../infra/typeorm/entities/Places";





export default interface IPlacesRepository {
  create({name,description,category_id,address_id,id}:ICreatePlacesDTO):Promise<Places>
  list():Promise<Places []>;
}
