import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

import { BrandService } from '../services/brand.service';
import { CreateBrandDTO, UpdateBrandDTO } from '../dtos/brand.dtos';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}
  @Get()
  getAllBrands() {
    return this.brandService.findAll();
  }

  @Get(':id')
  getBrandById(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateBrandDTO) {
    return this.brandService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDTO,
  ) {
    return this.brandService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.remove(id);
  }
}
