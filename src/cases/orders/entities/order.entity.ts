import { Costumer } from "src/cases/costumer/costumer.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

    enum OrderStatus{
        NEW = 'NEW',
        SEPARATION = 'SEPARATION',
        INVOICED = 'INVOICED',
        SHIPPED = 'SHIPPED',
        DELIVERED = 'DELIVERED',
        CANCELED = 'CANCELADO'
    }

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')  
  id: string;

  @ManyToOne(() => Costumer, {eager: true, nullable: false})
  customer: Costumer;

  @Column('decimal', {nullable: true, precision: 10, scale: 2})
  shipping: number;

  @Column('enum', {enum: OrderStatus, default: OrderStatus.NEW})
  status: string;

  @Column('decimal', {nullable: true, precision: 10, scale: 2})
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}   