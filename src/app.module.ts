import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './products/product.controller';
import { ProductService } from './products/product.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
