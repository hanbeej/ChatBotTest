require('dotenv').config();
const {RTMClient} = require('@slack/rtm-api');
var token = process.env.SLACK_TOKEN;
var food = require('./food');
var movie= require('./movie');

var rtm = new RTMClient(token);
rtm.start();
rtm.on('message',function (message){
  var channel = message.channel;
  var text = message.text;
  //rtm.sendMessage('안녕하세요. 영화,밥,놀이 중에 말씀해주세요.',channel);
  switch (text){
	  case '영화':
		  movie(rtm,channel);
		  break;
	  case '밥':
		  food(rtm,channel);
		  break;
	  case '놀이':
		  rtm.sendMessage('고만해.',channel);
		  break;
	  default:
		  rtm.sendMessage('안녕하세요. 영화, 밥, 놀이 중에 말씀해주세요.',channel);
  }
});
