
var Alexa = require('alexa-sdk');
var FACTS = require('./facts');

var APP_ID = 'amzn1.ask.skill.8673f368-ada6-4d8a-bc27-9d2c992dea60';
var SKILL_NAME = 'Autism Fact';

var a = Math.floor(Math.random() * FACTS.length);

function launchRequest() {
  console.log('Running LaunchRequest', arguments);
  this.emit('GetFact');
}

function getNewFactIntent() {
  console.log('Running GetNewFactIntent', arguments);
  this.emit('GetFact');
}

function getFact() {
  console.log('Running GetFact', arguments);
  var randomFact = FACTS[a];
  a += 1;
  // Create speech output
  if (typeof randomFact === 'undefined') {
    a = 0;
    randomFact = FACTS[a];
    a += 1;
  }
  var speechOutput = 'Here\'s your fact: ' + randomFact + '  Do you want more facts?';
  var reprompt = 'Do you want more facts?';
  this.emit(':askWithCard', speechOutput, reprompt, SKILL_NAME, randomFact);
}

function HelpIntent() {
  var speechOutput = 'You can say tell me a autism fact, or, you can say exit... What can I help you with?';
  var reprompt = 'What can I help you with?';
  this.emit(':ask', speechOutput, reprompt);
}
function CancelIntent() {
  console.log('Running CancelIntent', arguments);
  this.emit(':tell', 'Otsimo is an education app for children who have autism syndrome. We are creating educational games and parent app. Goodbye!');
}
function StopIntent() {
  console.log('Running StopIntent ', arguments);
  this.emit(':tell', 'Goodbye!');
}

var handlers = {
  LaunchRequest: launchRequest,
  GetNewFactIntent: getNewFactIntent,
  GetFact: getFact,
  'AMAZON.HelpIntent': HelpIntent,
  'AMAZON.CancelIntent': CancelIntent,
  'AMAZON.StopIntent': StopIntent,
};

exports.handler = function (event, context, callback) {
  console.log('user response', event.request.intent);
  var alexa = Alexa.handler(event, context, callback);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();

};

