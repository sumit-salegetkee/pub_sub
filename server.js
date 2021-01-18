var awsIot = require('aws-iot-device-sdk');
 
//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
   keyPath: '007e9c30a9-private.pem.key',
  certPath: '007e9c30a9-certificate.pem.crt',
    caPath: 'AmazonRootCA1.pem',
  clientId: 'testAWSConnection',
   host: 'a2b5bivy0ladss-ats.iot.ap-south-1.amazonaws.com'
});
 
//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    //device.subscribe('topic_1');
    device.publish('MyConnectPolicy', JSON.stringify({ test_data: 'NodeJS server connected...'}));
  });
 
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });