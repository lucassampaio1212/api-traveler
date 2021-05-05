import Category from "../infra/typeorm/entities/Categories";




export default interface ICategoriesRepository {
  create(name: string): Promise<Category>;
  fidById(id: string): Promise<Category>
  list(): Promise<Category[]>
}
