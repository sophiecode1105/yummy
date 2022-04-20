import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { PrismaService } from 'src/prisma.service';
import { handleFileUpload } from './awsUploader';
// import { AWSS3Uploader } from './awsUploader';
@Resolver()
export class FileResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation()
  async uploadFile(
    @Args('file', { type: () => GraphQLUpload })
    file: Promise<FileUpload>,
  ): Promise<Boolean> {
    console.log(file);
    console.log('1');
    console.log('2');
    const response = await handleFileUpload(file);
    console.log('5');
    return true;
  }
}
