import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


@Entity("addresses")
class Addresses {

  @PrimaryColumn("uuid")
  id: string;

  @Column()
  zip_code: number;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  number: number;

  constructor(){
    if(!this.id) {
      this.id = uuidV4();
    }
  }

}
export default Addresses;
