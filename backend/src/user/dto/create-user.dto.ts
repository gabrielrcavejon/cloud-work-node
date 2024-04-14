import { User } from "../entities/user.entity";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateUserDto extends User {
  @IsInt()
  idcourse: number

  @IsString()
  email: string

  @IsString()
  password: string

  @IsString()
  name: string

  @IsString()
  @IsOptional()
  image?: string
}
