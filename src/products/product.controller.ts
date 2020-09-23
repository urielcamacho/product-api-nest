import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateProductDto } from './dtos/createProduct';
import { UpdateProductDto } from './dtos/updateProduct';

import { ProductService } from './product.service';
import { IProduct } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductService) {}

    /* Returns a list with all products */
    @Get()
    getAllProducts(): Promise<IProduct[]> {
        return this.productService.getAllProducts();
    }

    /* Create a new product */
    @Post()
    createProduct(@Body() product: CreateProductDto): Promise<IProduct> {
        return this.productService.createProduct(product);
    }
    
    /* Updating a product */
    @Put(':id')
    updateProduct(@Param('id') idProduct: string, @Body() product: UpdateProductDto): Promise<IProduct> {
        return this.productService.updateProduct(idProduct, product);
    }

    /* Delete a product */
    @Delete(':id')
    deleteProduct(@Param('id') idProduct): Promise<IProduct> {
        return this.productService.deleteProduct(idProduct);
    }

}