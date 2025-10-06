import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Customer } from "./costumer.entity";

@Injectable()
export class CustomerService {
    constructor (
        @InjectRepository(Customer)
        private repository: Repository<Customer>
    ) {}

    findAll(): Promise<Customer[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<Customer | null> {
        return this.repository.findOneBy({id: id});
    }

    save(customer: Customer): Promise<Customer> {
        return this.repository.save(customer);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete({id: id});
    }
}