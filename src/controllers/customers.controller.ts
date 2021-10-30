import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Update customer with Id: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Delete customer with Id: ${id}`,
    };
  }
}
