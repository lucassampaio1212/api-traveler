import { Request, Response } from "express";
import { container } from "tsyringe";
import UploadImageCitiesUseCase from "./UploadImageDepositionsUseCase";

interface IFiles {
  filename: string;
}


export default class UploadImageDepositionsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const images_name = request.file.filename;

    const uploadImageCitiesUseCase = container.resolve(UploadImageCitiesUseCase);



    await uploadImageCitiesUseCase.execute({
      deposity_id: id,
      images_name,
    });

    return response.status(201).send()

  }
}
