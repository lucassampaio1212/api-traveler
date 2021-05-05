import ICategoriesRepository from "@modules/Tourism/repositories/ICategoriesRepository";
import { getRepository, Repository } from "typeorm";
import Category from "../entities/Categories";





export default class CategoriesRepositories implements ICategoriesRepository{

  private repository: Repository<Category>

  constructor(){
    this.repository = getRepository(Category)
  }
  public async fidById(id: string): Promise<Category> {
    const category = await this.repository.findOne(id);

    return category;
  }

  public async create(name: string): Promise<Category> {
    const category = this.repository.create({
      name
    });


    await this.repository.save(category);

    return category;
  }

  public async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;

  }




}
