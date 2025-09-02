import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CityService } from "./services/city.service";
import { CityController } from "./controllers/city.controller";
import { City } from "./entities/city.entity";
import { State } from "./entities/state.entity";
import { StateService } from "./services/state.service";
import { StateController } from "./controllers/state.controller";


@Module({
    imports: [TypeOrmModule.forFeature([State,City])],
    providers: [StateService, CityService],
    controllers: [StateController,CityController]
})
export class CityModule {}