import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('uuid')  
  id: string;
  name: string;
}