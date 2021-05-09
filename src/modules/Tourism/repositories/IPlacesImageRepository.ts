import PlacesImage from "../infra/typeorm/entities/PlacesImage";




export default interface IPlacesimageRepository {

  create(place_id: string, image_name: string): Promise<PlacesImage>
}
