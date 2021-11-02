import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/orders.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  // @Get()
  // getOrders() {
  //   return this.ordersService.findAll();
  // }

  // @Get(':id')
  // getOrder(@Param('id', ParseIntPipe) id: number) {
  //   return this.ordersService.findOne(id);
  // }

  // @Post()
  // create(@Body() payload: CreateOrderDTO) {
  //   return this.ordersService.create(payload);
  // }

  // @Put(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: UpdateOrderDTO,
  // ) {
  //   return this.ordersService.update(id, payload);
  // }

  // @Delete(':id')
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return this.ordersService.remove(id);
  // }
}
