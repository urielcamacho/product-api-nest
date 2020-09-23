import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface'

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Products_UrielCamacho') private readonly productModel: Model<IProduct>) {

    }

    async getAllProducts(): Promise<IProduct[]> {
        return await this.productModel.find();
    }

    async createProduct(product: IProduct): Promise<IProduct> {
        return await this.productModel.create(product);
    }

    async updateProduct(idProduct: string, product: IProduct): Promise<IProduct> {
        return this.productModel.findByIdAndUpdate(idProduct, product);
    }

    async deleteProduct(idProduct: string): Promise<IProduct> {
        return this.productModel.findByIdAndRemove(idProduct);
    }

}