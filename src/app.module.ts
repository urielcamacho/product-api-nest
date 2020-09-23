import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './products/product.controller';
import { ProductService } from './products/product.service';
import { ProductSchema } from './products/schemas/product.schema'

/* Add Product's controller and providers and important connection configuration with Mongo Atlas via Mongoose */ 
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://urielprueba:S0ftM4chin3@test.qylyb.mongodb.net/test?retryWrites=true&w=majority"),
    MongooseModule.forFeature([
      {
        name: 'Products_UrielCamacho', schema: ProductSchema
      }
    ])
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class AppModule {}
