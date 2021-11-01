import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDTO, UpdateCustomerDTO } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;

  private customers: Customer[] = [
    {
      id: 1,
      name: 'Customer 1',
      description: 'Description Customer 1',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id == id);
    if (!customer) throw new NotFoundException(`Customer #${id} not found`);
    return customer;
  }

  create(payload: CreateCustomerDTO) {
    if (this.customers.length == 0) this.counterId = 0;
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDTO) {
    const idx = this.customers.findIndex((item) => item.id == id);
    if (idx === -1) throw new NotFoundException(`Customer #${id} not found`);
    const customer = this.findOne(id);
    const newCustomer = {
      ...customer,
      ...payload,
    };
    this.customers.splice(idx, 1, newCustomer);
    return newCustomer;
  }

  remove(id: number) {
    const idx = this.customers.findIndex((item) => item.id == id);
    if (idx === -1) throw new NotFoundException(`Customer #${id} not found`);
    this.customers.splice(idx, 1);
    return {
      message: `Customer #${id} deleted`,
    };
  }
}
