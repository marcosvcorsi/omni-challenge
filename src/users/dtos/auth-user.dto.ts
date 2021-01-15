import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
