import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getAllBrands() {
    return {
      message: 'This route is for all brands',
    };
  }

  @Get(':id')
  getBrandById(@Param('id') id: number) {
    return {
      message: `Brand by id: ${id}`,
    };
  }

  @Post(':name')
  addBrand(@Param('name') name: string) {
    return {
      message: `Brand add: ${name}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Brand successfully created',
      payload,
    };
  }
}
