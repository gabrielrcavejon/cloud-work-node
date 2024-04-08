import { Injectable } from '@nestjs/common';
import { User } from './User';
import { UserDto } from './UserDto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: "gabriel"
    },
    {
      id: 2,
      name: "Pedro"
    }
  ]

  findAll() {
    return this.users.filter(Boolean);
  }

  async findByid(id: number) {
    const user = this.users.find(users => users?.id === id);

    if (!user) {
      throw Error(`Mensagem com o ID ${id} não encontrado.`);
    }

    return user;
  }

  create(userDto: UserDto) {
    const id = this.users.length + 1;

    const user: User = {
      id,
      ...userDto
    }

    this.users.push(user);

    return user;
  }

  async update(id: number, userDto: UserDto) {
    const index = this.users.findIndex((user) => user?.id === id);

    if (index < 0) {
      throw Error(`Usuario com o id '${id}' não encontrada.`);
    }

    const user: User = {
      id,
      ...userDto
    }

    this.users[index] = user;

    return user;
  }

  async delete(id: number) {
    const index = this.users.findIndex((user) => user?.id === id);

    if (index < 0) {
      throw Error(`Usuario com o id '${id}' não encontrada.`);
    }

    delete this.users[index];

    return true;
  }
}
