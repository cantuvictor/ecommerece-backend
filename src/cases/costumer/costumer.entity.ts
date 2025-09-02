import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../cities/entities/city.entity";


@Entity('costumer')
export class Costumer{
  @PrimaryGeneratedColumn('uuid')  
  id: string;

  @Column({ length: 60, nullable: true})
  name: string;

  @Column({ length: 250, nullable: true})
  address: string;

  @Column({ length: 8, nullable: true})
  zipcode: string;

  @ManyToOne(() => City, {eager: true, nullable: true}) 
  city: City;

}   