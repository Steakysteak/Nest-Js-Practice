import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductsController{

    constructor(private readonly productService: ProductService) {}

    @Post()
    addProduct(@Body('title') title: string, @Body('description') description: string, @Body('price') price: number, ): any {
        return this.productService.insertProduct(title, description, price)
    }

    @Get()
    getAllProducts(): any {
        return this.productService.getAllProducts()
    }

    @Get(':id')
    getSingleProduct(@Param('id') prodId: string):any {
        return this.productService.getSingleProduct(prodId)
    }
}