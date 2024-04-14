import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    await this.prisma.user.create({
      data
    })
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id }
    })
  }

  async update(id: number, data: UpdateUserDto) {
    await this.prisma.user.update({
      where: { id },
      data,
    })
  }

  async remove(id: number) {
    await this.prisma.user.delete({
      where: { id }
    })
  }
}
