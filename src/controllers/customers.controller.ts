import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAllCustomer() {
    return 'This route is for all customers';
  }
}
