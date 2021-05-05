import CitieImage from "../infra/typeorm/entities/CitieImages";




export default interface ICitiesImageRepository {
  create(city_id: string, image_name: string): Promise<CitieImage>
}
