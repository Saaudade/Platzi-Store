import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    return {
      message: `This route is for all users`,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return {
      message: `Id user: ${id}`,
    };
  }

  @Get(':name')
  getUserByName(@Param('name') name: string) {
    return {
      message: `Username: ${name}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Update user with Id: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Delete user: ${id}`,
    };
  }
}
