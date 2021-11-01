import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsPositive, IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  numProducts: number;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}
