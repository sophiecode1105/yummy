import {
  MiddlewareConsumer,
  Module,
  NestModule,
  UseGuards,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { UserResolver } from './user.resolver';
import { RecipeResolver } from './recipe.resolver';
import { MailerModule } from '@nestjs-modules/mailer';
import { MetarialResolver } from './metarial.resolver';
import { ContentResolver } from './content.resolver';
import { LikeResolver } from './Like.resolver';
// import { UseResolver } from './use.resolver';
import { graphqlUploadExpress } from 'graphql-upload';
import { FileResolver } from '../uploads/img.resolver';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      uploads: false,
    }),
    MailerModule.forRoot({
      transport: {
        service: 'Naver',
        host: 'smtp.naver.com',
        port: 587,
        auth: {
          user: 'malove0330@naver.com', //gmail주소입력
          pass: process.env.MAIL_PASSWORD, //gmail패스워드 입력
        },
      },
    }),
  ],
  providers: [
    PrismaService,
    UserResolver,
    RecipeResolver,
    MetarialResolver,
    ContentResolver,
    LikeResolver,
    // UseResolver,
    FileResolver,
  ],
})
export class AppModule implements NestModule {
  @UseGuards(AuthGuard('local'))
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}
