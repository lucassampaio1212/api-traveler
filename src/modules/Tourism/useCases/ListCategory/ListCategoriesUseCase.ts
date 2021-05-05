import Category from "@modules/Tourism/infra/typeorm/entities/Categories";
import ICategoriesRepository from "@modules/Tourism/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export default class ListCategoriesUseCase {
   constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
   ){}

   public async execute():Promise<Category[]>{
     const categories = await this.categoriesRepository.list();

     return categories;
   }
}
