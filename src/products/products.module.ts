import { Module } from '@nestjs/common';
import { BrandController } from './controllers/brand.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CustomersController } from './controllers/customers.controller';
import { ProductsController } from './controllers/products.controller';
import { BrandService } from './service/brand.service';
import { CustomersService } from './service/customers.service';
import { CategoriesService } from './service/categories.service';
import { ProductsService } from './service/products.service';

@Module({
  controllers: [
    BrandController,
    CategoriesController,
    CustomersController,
    ProductsController,
  ],
  providers: [
    BrandService,
    CategoriesService,
    CustomersService,
    ProductsService,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
