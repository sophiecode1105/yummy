const AWS = require('aws-sdk');
// store each image in it's own unique folder to avoid name duplicates

// load config data from .env file

require('dotenv').config();
// update AWS config env data
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

// my default params for s3 upload
// I have a max upload size of 1 MB
const s3DefaultParams = {
  ACL: 'public-read',
  Bucket: process.env.S3_BUCKET_NAME,
  Conditions: [
    ['content-length-range', 0, 1024000], // 1 Mb
    { acl: 'public-read' },
  ],
};

// the actual upload happens here
export const handleFileUpload = async (file) => {
  const { createReadStream, filename } = await file['file'];

  return new Promise((resolve, reject) => {
    s3.upload(
      {
        ...s3DefaultParams,
        Body: createReadStream(),
        Key:
          Math.floor(Math.random() * 1000).toString() +
          Date.now() +
          '.' +
          filename.split('.').pop(),
      },

      (err, data) => {
        if (err) {
          console.log('error uploading...', err);
          reject(err);
        } else {
          console.log('successfully uploaded file...', data);
          resolve(data);
        }
      },
    );
  });
};
