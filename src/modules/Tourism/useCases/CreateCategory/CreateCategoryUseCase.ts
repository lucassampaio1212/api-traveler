import Category from "@modules/Tourism/infra/typeorm/entities/Categories";
import ICategoriesRepository from "@modules/Tourism/repositories/ICategoriesRepository";
import AppError from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";




@injectable()
export default class CreateCategoryUseCase {
    constructor(
      @inject("CategoriesRepository")
      private categoriesRepository: ICategoriesRepository
    ){}


  public async execute(name: string, id?: string):Promise<Category>{
    const categories = await this.categoriesRepository.list();
    const countCategory = await this.categoriesRepository.fidById(id);

    if(countCategory && categories.length > 2){
      throw new AppError("you cannot register more than 3 categories in the application");
    }
    const category = await this.categoriesRepository.create(name);


    return category;

  }
}
