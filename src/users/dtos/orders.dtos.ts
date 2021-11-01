import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly numOrder: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly numProducts: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {}
