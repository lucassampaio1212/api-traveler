import { Request, Response } from "express";
import { container } from "tsyringe";
import UploadImagePlaceUseCase from "./UploadImagePlaceUseCase";


interface IFiles {
  filename: string;
}


export default class UploadImagePlacesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const image_name = request.file.filename;

    const uploadImagePlaceUseCase = container.resolve(UploadImagePlaceUseCase);



    await uploadImagePlaceUseCase.execute({
      place_id: id,
      image_name,
    });

    return response.status(201).send()

  }
}
