import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dtos/category.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;

  private categories: Category[] = [
    {
      id: this.counterId,
      name: 'Category 1',
      description: 'Desc',
      numProducts: 12,
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id == id);
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  create(payload: CreateCategoryDTO) {
    if (this.categories.length == 0) this.counterId = 0;
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDTO) {
    const idx = this.categories.findIndex((item) => item.id == id);
    if (idx === -1) throw new NotFoundException(`Category #${id} not found`);
    const category = this.categories.find((item) => item.id == id);
    const newCategory = {
      ...category,
      ...payload,
    };
    this.categories.splice(idx, 1, newCategory);
    return newCategory;
  }

  remove(id: number) {
    const idx = this.categories.findIndex((item) => item.id == id);
    if (idx === -1) throw new NotFoundException(`Category #${id} not found`);
    this.categories.splice(idx, 1);
    return {
      message: `Category #${id} deleted`,
    };
  }
}
