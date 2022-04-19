// import AWS from 'aws-sdk';

// type S3UploadConfig = {
//   accessKeyId: string;
//   secretAccessKey: string;
//   destinationBucketName: string;
//   region?: string;
// };

// export class AWSS3Uploader {
//   private s3: AWS.S3;
//   public config: S3UploadConfig;

//   constructor(config: S3UploadConfig) {
//     AWS.config = new AWS.Config();
//     AWS.config.update({
//       accessKeyId: process.env.S3_ACCESS_KEY_ID,
//       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//       region: 'ap-northeast-2',
//     });

//     this.s3 = new AWS.S3();
//     this.config = config;
//   }
// }
