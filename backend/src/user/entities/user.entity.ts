import { Prisma } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  idcourse: number;
  email: string;
  password: string;
  name: string;
  image?: string;
}
