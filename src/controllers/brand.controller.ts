import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getAllBrands() {
    return 'This route is for all brands';
  }

  @Get(':id')
  getBrandById(@Param('id') id: number) {
    return `Brand by id: ${id}`;
  }

  @Post(':name')
  addBrand(@Param('name') name: string) {
    return `Brand add: ${name}`;
  }
}
