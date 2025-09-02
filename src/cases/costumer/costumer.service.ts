import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Costumer } from "./costumer.entity";

@Injectable()
export class CostumerService {
    constructor(
        @InjectRepository(Costumer)
        private repository: Repository<Costumer>
    ) {}


    findAll(): Promise<Costumer[]> {
        return this.repository.find()
    }

    findById(id: string): Promise<Costumer | null> {
        return this.repository.findOneBy({id: id})  
    }

    save(city: Costumer): Promise<Costumer> {
        return this.repository.save(city)
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}