import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
// import { AWSS3Uploader } from './awsUploader';

@Resolver()
export class FileResolver {
  constructor() {}

  @Mutation()
  async uploadFile(
    @Args('file', { type: () => GraphQLUpload })
    file: Promise<FileUpload>,
  ): Promise<Boolean> {
    const { createReadStream, filename, encoding, mimetype } = file['file'];
    const stream = createReadStream();

    // const result = await this.awsUploader.uploadToS3({
    //   Key: 'fdjksfljs',
    //   ContentEncoding: encoding,
    //   Body: stream,
    //   ContentType: mimetype,
    // });

    return new Promise(async (resolve, reject) =>
      stream
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );
  }
}
