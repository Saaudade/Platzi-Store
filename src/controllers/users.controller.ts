import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    return `This route is for all users`;
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return `Id user: ${id}`;
  }

  @Get(':name')
  getUserByName(@Param('name') name: string) {
    return `Username: ${name}`;
  }
}
