const AWS = require('aws-sdk');
const { reorganizeLogFile } = require('./utils');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

async function process() {
  const bucketParams = {
    Bucket: 'porsche-design-system-logs',
    Prefix: 'cloudfront/',
    Marker: 'cloudfront/EN98BRSTE4L4P.2021-04-07-15.fff1862d.anonymized.gz',
    MaxKeys: 1000,
  };

  console.log('listing objects');

  const files = await s3
    .listObjects(bucketParams, function (err, data) {
      if (err) console.log(err, err.stack);
    })
    .promise();

  for (const file of files.Contents) {
    await reorganizeLogFile(file.Key);
  }

  console.log('next marker', files.Contents[files.Contents.length - 1].Key);
}

exports.handler = async (event) => {
  await process();
};
