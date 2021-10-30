import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id') id: number) {
    return {
      message: `Order with number ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Order successfully created',
      payload,
    };
  }
}
