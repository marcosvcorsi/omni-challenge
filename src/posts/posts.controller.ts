import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Post } from './post.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('posts')
export class PostsController {
  @Get('/')
  async findAll(): Promise<Post[]> {
    return Promise.resolve([]);
  }
}
