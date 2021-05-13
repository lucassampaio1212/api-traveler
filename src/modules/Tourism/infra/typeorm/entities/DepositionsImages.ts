import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {
  v4 as uuidV4
} from "uuid";

@Entity("images_depositions")
class DepositionsImage {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    deposition_id: string;

    @Column()
    image_name: string;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
      if(!this.id) {
        this.id = uuidV4();
      }
    }

}
export default DepositionsImage;
