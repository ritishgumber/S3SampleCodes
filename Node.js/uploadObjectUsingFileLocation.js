
var http= require('http')
const originalRequest = http.request; 
// override the function
http.request = function wrapMethodRequest(req) {
  console.log(req.host, req.body);
  // do something with the req here
  // ...
  // call the original 'request' function   
  return originalRequest.apply(this, arguments);
}

var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
// Read in the file, convert it to base64, store to S3
fs.readFile('filename.txt', function (err, data) {
  if (err) { throw err; }

  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.putObject({
    Bucket: 'bucketname',
    Key: 'key-name.ext',
    Body: base64data,
    ACL: 'public-read'
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});
