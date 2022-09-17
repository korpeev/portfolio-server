import {
  Body,
  Controller,
  HttpCode,
  Post,
  HttpStatus,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDto } from './dto/post.create.dto';
import { PostUpdateDto } from './dto/post-update.dto';

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
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id', new ParseIntPipe()) id: number) {
    return await this.postService.getOne(id);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() postData: PostUpdateDto,
  ) {
    return await this.postService.update(id, postData);
  }
}
