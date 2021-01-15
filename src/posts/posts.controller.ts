import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@UseGuards(AuthGuard('jwt'))
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(@Request() request): Promise<Post[]> {
    const { userId } = request.user;

    return this.postsService.findAllByUser(userId);
  }
}
