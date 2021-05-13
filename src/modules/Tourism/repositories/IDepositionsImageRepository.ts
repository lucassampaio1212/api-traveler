import DepositionsImage from "../infra/typeorm/entities/DepositionsImages";



export default interface IDepositionsImageRepository {
 create(deposition_id: string, image_name: string): Promise<DepositionsImage>

}
