import { CategoryService } from "./category.service";
import { Controller, Get } from "./category.entity";
import { Category } from "./category.entity";
import { ParseUUIDPipe } from "@nestjs/common";

@Controller('categories')
export class CategoryController {

    constructor(private readonly service: CategoryService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.service.findAll();
    }
    
    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {

    }

}