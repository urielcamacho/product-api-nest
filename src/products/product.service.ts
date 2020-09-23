import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface'

@Injectable()
export class ProductService {
    getAllProducts() {
        return `Return all products`;
    }

    createProduct(): string {
        return `Create a new product`;
    }

    updateProduct(): string {
        return `Update a product`;
    }

    deleteProduct(): string {
        return `Delete product`;
    }
}
