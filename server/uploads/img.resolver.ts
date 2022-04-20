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
    console.log('file');
    console.log('env, ', process.env.MAIL_PASSWORD);
    console.log(file);

    const response = await handleFileUpload(file);
    console.log(response);
    return true;
    // const { createReadStream, filename, encoding, mimetype } = file['file'];
    // const stream = createReadStream();

    // const result = await this.awsUploader.uploadToS3({
    //   Key: 'fdjksfljs',
    //   ContentEncoding: encoding,
    //   Body: stream,
    //   ContentType: mimetype,
    // });

    // await this.prisma.contents.update({
    //   where: { id: 1 },
    //   data: { img: path },
    // });

    // return new Promise(async (resolve, reject) =>
    //   stream
    //     .pipe(createWriteStream(`./uploads/${filename}`))
    //     .on('finish', () => resolve(true))
    //     .on('error', () => reject(false)),
    // );
  }
}
