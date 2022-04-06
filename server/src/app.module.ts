import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogModule } from './dog/dog.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bomba:1234@cluster0.c125d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    DogModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
