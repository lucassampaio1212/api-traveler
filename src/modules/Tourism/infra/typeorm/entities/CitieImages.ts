import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import {v4 as uuidV4} from "uuid";

@Entity("images_cities")
class CitieImage {

  @PrimaryColumn("uuid")
  id: string;

  @Column()
  city_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;


  constructor(){
    if(!this.id) {
      this.id = uuidV4()
    }
  }

}
export default CitieImage;
