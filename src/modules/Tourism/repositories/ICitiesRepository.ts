import ICreateCitiesDTO from "../dtos/ICreateCitiesDTO";
import Cities from "../infra/typeorm/entities/Cities";




export default interface ICitiesRepository {
  create({name,description}:ICreateCitiesDTO): Promise<Cities>
  findById(id: string): Promise<Cities>;
  list(): Promise<Cities[]>
}
