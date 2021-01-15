import {
  Body,
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
  Put,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostEntity } from './post.entity';
import { PostsService } from './posts.service';

@UseGuards(AuthGuard('jwt'))
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(@Request() request): Promise<PostEntity[]> {
    const { userId } = request.user;

    return this.postsService.findAllByUser(userId);
  }

  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
    @Request() request,
  ): Promise<PostEntity> {
    const { userId } = request.user;

    return this.postsService.create(createPostDto, userId);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: number,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<void> {
    await this.postsService.update(id, updatePostDto);
  }
}
