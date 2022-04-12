import { Module } from '@nestjs/common';

import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
  ],

  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}
