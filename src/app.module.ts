import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), PostModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
