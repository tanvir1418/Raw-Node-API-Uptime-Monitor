/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Tanvir Ahmed
 * Date: 15/06/21
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const { sendTwilioSms } = require('./helpers/notifications');

// app object - module scaffolding
const app = {};

// testing for sending sms by twilio
sendTwilioSms('01738372627', 'Hello this message is sent by twilio', (err) => {
    console.log('This is the error: ', err);
});

// testing file system
// // File Handling: Create File
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//     console.log('error was', err);
// });
// // File Handling: Read File
// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result);
// });
// // File Handling: Update File
// data.update('test', 'newFile', { name: 'England', language: 'English' }, (err) => {
//     console.log(err);
// });
// // File Handling: Delete File
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
