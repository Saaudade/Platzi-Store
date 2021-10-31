import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDTO, CreateUserDTO } from 'src/dtos/users.dtos';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;

  private users: User[] = [
    {
      id: 1,
      name: 'Christian Alberto Tamayo Robayo',
      age: 22,
      email: 'giby098@hotmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((temp) => temp.id == id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDTO) {
    if (this.users.length == 0) {
      this.counterId = 0;
    }
    this.counterId += 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDTO) {
    const user = this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    const index = this.users.findIndex((item) => item.id == id);
    const newUser = {
      ...user,
      ...payload,
    };
    this.users[index] = newUser;
    return this.users[index];
  }

  remove(id: number) {
    try {
      const index = this.users.findIndex((item) => item.id == id);
      if (index === -1) {
        throw new NotFoundException(`User #${id} not found`);
      }
      this.users.splice(index, 1);
      return { message: `User #${id} deleted` };
    } catch (error) {
      console.error(error);
    }
  }
}
