import { IsNotEmpty, IsString } from 'class-validator';

export class PostUpdateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
