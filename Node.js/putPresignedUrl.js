/* 
* Modify:
*  - bucket-name, 
*  - key name,
*  - putObject or getObject
*  - other fields  as per the requirement. 
*  
* Refer for more details: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property
*/

// for Node.js
var AWS = require('aws-sdk')
/*
* Browser based
*    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.407.0.min.js"></script>
*/

const s3 = new AWS.S3({ apiVersion: '2006-03-01', signatureVersion: 'v4', region: 'us-east-1' });

var params = {
    Bucket: 'bucket-name',
    Key: 'key-name.ext',
	Expires:'1800',
	ServerSideEncryption:'AES256',
	ContentType:'text/plain',
	ACL:'private'
};

var url = s3.getSignedUrl('putObject', params);
console.log(url);
