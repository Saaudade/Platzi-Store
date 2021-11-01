import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/users/entities/order.entity';
import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/orders.dtos';

@Injectable()
export class OrdersService {
  private counterId = 1;

  private orders: Order[] = [
    {
      id: 1,
      numOrder: 1,
      numProducts: 10,
      description: `Order #${this.counterId}`,
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((item) => item.id == id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  create(payload: CreateOrderDTO) {
    if (this.orders.length == 0) this.counterId = 0;
    this.counterId += 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: number, payload: UpdateOrderDTO) {
    const idx = this.orders.findIndex((item) => item.id == id);
    if (idx === -1) {
      throw new NotFoundException(`Orders #${id} not found`);
    }
    const order = this.findOne(id);
    const newOrder = {
      ...order,
      ...payload,
    };
    this.orders.splice(idx, 1, newOrder);
    return newOrder;
  }

  remove(id: number) {
    const order = this.findOne(id);
    if (!order) {
      throw new NotFoundException(`Orders #${id} not found`);
    }
    const idx = this.orders.findIndex((item) => item.id == id);
    this.orders.splice(idx, 1);
    return { message: `Order #${id} deleted` };
  }
}
