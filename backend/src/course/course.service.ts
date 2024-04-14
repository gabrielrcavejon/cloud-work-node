import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/PrismaService';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateCourseDto) {
    await this.prisma.course.create({
      data
    })
  }

  async findAll() {
    return await this.prisma.course.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.course.findUnique({
      where: { id }
    })
  }

  async update(id: number, data: UpdateCourseDto) {
    await this.prisma.course.update({
      where: { id },
      data,
    })
  }

  async remove(id: number) {
    await this.prisma.course.delete({
      where: { id }
    })
  }
}
