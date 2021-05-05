import Category from "@modules/Tourism/infra/typeorm/entities/Categories";
import ICategoriesRepository from "@modules/Tourism/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";




@injectable()
export default class CreateCategoryUseCase {
    constructor(
      @inject("CategoriesRepository")
      private categoriesRepository: ICategoriesRepository
    ){}


  public async execute(name: string):Promise<Category>{
    const category = await this.categoriesRepository.create(name);


    return category;

  }
}
