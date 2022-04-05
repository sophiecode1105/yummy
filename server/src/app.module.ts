import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bomba:1234@cluster0.c125d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    DogModule,
  ],
})
export class AppModule {}
