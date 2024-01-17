import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolver';
import { PrismaService } from '../../prisma.service';

@Module({
  imports: [],
  providers: [PostsResolver, PrismaService],
})
export class PostsModule {}
