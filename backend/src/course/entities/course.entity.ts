import { Prisma } from "@prisma/client";

export class Course implements Prisma.CourseUncheckedCreateInput {
  id?: number
  description: string
}