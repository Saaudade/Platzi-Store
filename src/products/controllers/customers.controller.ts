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

import { CustomersService } from '../service/customers.service';
import { CreateCustomerDTO, UpdateCustomerDTO } from '../dtos/customers.dto';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAllCustomer() {
    return this.customersService.findAll();
  }

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDTO) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDTO,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(id);
  }
}
