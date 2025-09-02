import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Costumer } from "./costumer.entity";
import { CostumerController } from "./costumer.controller";
import { CostumerService } from "./costumer.service";


@Module({
    imports: [TypeOrmModule.forFeature([Costumer])],
    providers: [CostumerService],
    controllers: [CostumerController]
})
export class CostumerModule {}