import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the email of user' })
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
