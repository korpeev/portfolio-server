import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostCreateDto } from './post.create.dto';

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
}
