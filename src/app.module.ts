import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { OrdersService } from './services/orders.service';
import { CustomersService } from './services/customers.service';
import { CategoriesService } from './services/categories.service';
import { BrandService } from './services/brand.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    CustomersController,
    BrandController,
  ],
  providers: [
    AppService,
    ProductsService,
    UsersService,
    OrdersService,
    CustomersService,
    CategoriesService,
    BrandService,
  ],
})
export class AppModule {}
