import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async findAllByUser(userId: number): Promise<Post[]> {
    const posts = await this.postsRepository.find({
      where: {
        userId,
      },
      order: {
        id: 'DESC',
      },
    });

    return posts;
  }
}
