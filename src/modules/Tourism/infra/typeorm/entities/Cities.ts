import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import Places from "./Places";

@Entity("cities")
class Cities {

  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Places)
  @JoinTable({
    name: "places_cities",
    joinColumns: [{name: "city_id"}],
    inverseJoinColumns: [{name: "place_id"}]
  })
  places: Places[];

  @CreateDateColumn()
  created_at: Date;


  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }



}
export default Cities;

