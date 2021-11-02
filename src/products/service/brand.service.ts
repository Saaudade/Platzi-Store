import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDTO, UpdateBrandDTO } from '../dtos/brand.dto';

@Injectable()
export class BrandService {
  private counterId = 1;

  private brands: Brand[] = [
    {
      id: this.counterId,
      name: 'Brand 1',
      description: 'Desc Brand 1',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((temp) => temp.id == id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  create(payload: CreateBrandDTO) {
    if (this.brands.length == 0) this.counterId = 0;
    this.counterId += 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDTO) {
    const brand = this.brands.find((item) => item.id == id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);
    const idx = this.brands.findIndex((item) => item.id == id);
    const newBrand = {
      ...brand,
      ...payload,
    };
    this.brands[idx] = newBrand;
    return newBrand;
  }

  remove(id: number) {
    const idx = this.brands.findIndex((item) => item.id == id);
    if (idx === -1) throw new NotFoundException(`Brand #${id} not found`);
    this.brands.splice(idx, 1);
    return {
      message: `Brand #${id} deleted`,
    };
  }
}
