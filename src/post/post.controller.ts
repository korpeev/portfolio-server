import {
  Body,
  Controller,
  HttpCode,
  Post,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDto } from './post.create.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() postData: PostCreateDto) {
    return await this.postService.create(postData);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAll() {
    return await this.postService.getAll();
  }
}
