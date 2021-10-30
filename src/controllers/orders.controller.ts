import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id') id: number) {
    return `Order with number ${id}`;
  }
}
