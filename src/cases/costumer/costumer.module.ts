import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerService } from "./costumer.service";
import { CustomerController } from "./costumer.controller";
import { Customer } from "./costumer.entity";


@Module({
    imports:[TypeOrmModule.forFeature([Customer])],
    providers: [CustomerService],
    controllers: [CustomerController]
})
export class CustomerModule {}