const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const s3DefaultParams = {
  ACL: 'public-read',
  Bucket: process.env.S3_BUCKET_NAME,
  Conditions: [
    ['content-length-range', 0, 1024000], // 1 Mb
    { acl: 'public-read' },
  ],
};

export const handleFileUpload = async (file) => {
  const { createReadStream, filename } = await file['file'];

  return s3.upload(
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
      } else {
        console.log('successfully uploaded file...', data);
      }
    },
  );
};
