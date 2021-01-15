import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserDto } from './dtos/auth-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async auth(@Body() authUserDto: AuthUserDto): Promise<AuthResponseDto> {
    return this.usersService.auth(authUserDto);
  }
}
