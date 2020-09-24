import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './products/product.controller';
import { ProductService } from './products/product.service';
import { ProductSchema } from './products/schemas/product.schema'
import { config } from 'dotenv';
config();

/* Add Product's controller and providers and important connection configuration with Mongo Atlas via Mongoose */ 
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
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
