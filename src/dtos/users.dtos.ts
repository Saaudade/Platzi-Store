import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
