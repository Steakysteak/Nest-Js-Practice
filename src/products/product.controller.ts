import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
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

    @Patch(':id')
    updateProduct(@Param('id') prodId: string, @Body('title') title: string, @Body('description') description: string, @Body('price') price: number,): any {
        return this.productService.updateProduct(prodId, title, description, price)
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string): any{
        return this.productService.deleteProduct(prodId)
    }
}