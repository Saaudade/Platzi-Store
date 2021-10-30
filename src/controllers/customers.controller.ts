import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAllCustomer() {
    return {
      message: 'This route is for all customers',
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Customer successfully created',
      payload,
    };
  }
}
