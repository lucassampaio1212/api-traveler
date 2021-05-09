import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import Category from "./Categories";


@Entity("places")
class Places {
   @PrimaryColumn("uuid")
   id: string;

   @Column()
   name: string;

   @Column()
   description: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

   @Column()
   category_id: string;

   @Column()
   address_id: string;


   constructor(){
     if(!this.id) {
       this.id = uuidV4();
     }
   }


}
export default Places;
