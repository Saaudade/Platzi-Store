import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Update order with Id: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Delete order by Id: ${id}`,
    };
  }
}
