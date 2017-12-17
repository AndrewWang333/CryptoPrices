'use strict';
// Required Configurations: NodeJS, Google Trends API, Twilio
// BlockTrail API
// Past Datasets: https://www.coindesk.com/price/
var accountSid = 'ACf6e2c57a49f3a5266e44e4e292c94b5a';
var authToken = '069cf667c68c5e3624ba7f6a1ee68564';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var numbers = ['+12173051574','+18057249004'];
var twilioNumber = '+12176567597';

//var coinCap = require('./coinMarketCap');

setInterval(function(){
  runtest();


}, 1000);


function runtest(){
  for(let i = 0; i<numbers.length; i++){
    client.messages.create({
        body: 'Hello from Node',
        to: numbers[i],  // Text this number
        from: twilioNumber // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  }


}
// Potential additional features:
// (1) Google Trends API for analytics
// (2) Saving datasets onto database