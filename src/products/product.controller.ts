import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateProductDto } from './dtos/createProduct';
import { UpdateProductDto } from './dtos/updateProduct';

import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {


    constructor(private readonly productService: ProductService) {}

    /* Returns a list with all products */
    @Get()
    getAllProducts(): string {
        return this.productService.getAllProducts();
    }

    /* Create a new product */
    @Post()
    createProduct(@Body() product: CreateProductDto): string {
        return this.productService.createProduct();
    }
    
    /* Updating a product */
    @Put(':id')
    updateProduct(@Param('id') idProduct: string, @Body() product: UpdateProductDto): string {
        return this.productService.updateProduct();
    }

    /* Delete a product */
    @Delete(':id')
    deleteProduct(@Param('id') idProduct): string {
        return this.productService.deleteProduct();
    }
}