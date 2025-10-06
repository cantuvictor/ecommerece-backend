import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderItem } from "./order-item.entity";
import { Customer } from "src/cases/costumer/costumer.entity";

enum OrderStatus {
    NEW = 'NEW',
    SEPARATION = 'SEPARATION',
    INVOICED = 'INVOICED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED'
}

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Customer, { eager: true, nullable: false })
    customer: Customer;

    @Column('decimal', { nullable: false, precision: 10, scale: 2 })
    shipping: number;

    @Column('enum', { nullable: false, enum: OrderStatus, default: OrderStatus.NEW })
    status: string;

    @Column('decimal', { nullable: false, precision: 10, scale: 2 })
    total: number;

    @OneToMany(() => OrderItem, (item) => item.order, {
        eager: true,
        cascade: true
    })
    items: OrderItem[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}