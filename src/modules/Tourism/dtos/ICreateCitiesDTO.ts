import Places from "../infra/typeorm/entities/Places";

export default interface ICreateCitiesDTO{
  name: string;
  description: string;
  places?: Places[];
  id: string;
}
