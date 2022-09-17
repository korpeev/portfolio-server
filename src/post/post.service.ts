import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostCreateDto } from './dto/post.create.dto';
import { PostUpdateDto } from './dto/post-update.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(postData: PostCreateDto) {
    return await this.prismaService.post.create({
      data: postData,
      include: {
        comments: true,
      },
    });
  }
  async getAll() {
    return await this.prismaService.post.findMany({});
  }

  async getOne(id: number) {
    return await this.prismaService.post.findUnique({
      where: { id },
    });
  }

  async update(id: number, postData: PostUpdateDto) {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    });
    if (!post) throw new NotFoundException('Пост не найден!');

    return await this.prismaService.post.update({
      where: { id },
      data: postData,
    });
  }
}
