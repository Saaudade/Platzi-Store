import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
}
