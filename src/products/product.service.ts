import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface'

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Products_UrielCamacho') private readonly productModel: Model<IProduct>) {}

    /* Get all the products with pagination */
    async getAllProducts(perPage: string, page: string): Promise<any> {

        try {
            let products =  await this.productModel.find().limit(parseInt(perPage))
                .skip(parseInt(perPage) * parseInt(page))
                .exec();
            let totalCount = await this.productModel.find({}).countDocuments();
            return {
                products,
                page: parseInt(page),
                totalCount: totalCount
            };
        } catch (e) {
            throw new HttpException(`Error on getAllProducts ${e.message}`, HttpStatus.BAD_REQUEST);
        }
    }

    /* Get a product with his _id */
    async getProduct(_id): Promise<IProduct> {

        try {
            return await this.productModel.findById(_id);
        } catch (e) {
            throw new HttpException(`Error on getProduct ${e.message}`, HttpStatus.BAD_REQUEST);
        }
    }

    // Create a new Product
    async createProduct(product: IProduct): Promise<IProduct> {
        try {
            return await this.productModel.create(product);
        } catch (e) {
            console.log(e.message);
            throw new HttpException(`Error on createProduct ${e.message}`, HttpStatus.BAD_REQUEST);
        }
    }

    // Update a new product via his _id
    async updateProduct(idProduct: string, product: IProduct): Promise<IProduct> {
        return this.productModel.findByIdAndUpdate(idProduct, product);
    }

    // Delete a product
    async deleteProduct(idProduct: string): Promise<IProduct> {
        try{
            return this.productModel.findByIdAndRemove(idProduct);
        } catch (e) {
            throw new HttpException(`Error on deleteProduct ${e.message}`, HttpStatus.BAD_REQUEST);
        }
    }

}