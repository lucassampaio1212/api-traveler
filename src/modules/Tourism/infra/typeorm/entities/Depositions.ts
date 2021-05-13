import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {
  v4 as uuidV4
} from "uuid";

@Entity("depositions")
class Depositions {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  city_id: string;

  @Column()
  place_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) {
      this.id = uuidV4();
    }
  }

}
export default  Depositions;
