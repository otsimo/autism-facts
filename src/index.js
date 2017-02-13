'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.echo-sdk-ams.app.[amzn1.ask.skill.1291781f-c9af-4b99-ab3a-34e622ed1c80]";
var SKILL_NAME = 'Autism Fact';
var a=0;
/**
 * Array containing autism facts.
 */
var FACTS = [
    "Autism now affects 1 in 68 children and 1 in 42 boys...",
    "Autism prevalence figures are growing...",
    "Autism is one of the fastest-growing developmental disorders in the U.S....",
    "Autism costs a family $60,000 a year on average...",
    "Boys are nearly five times more likely than girls to have autism...",
    "There is no medical detection or cure for autism...",
    "Autism is the fastest growing developmental disorder, yet most underfunded...",
    "A 2008 Danish Study found that the mortality risk among those with autism was nearly twice that of the general population...",
    "Children with autism do progress – early intervention is key...",
    "Autism is treatable, not a hopeless condition..."

];


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        var randomFact = FACTS[a];
        a=a+1;
        // Create speech output
        if(typeof randomFact=="undefined"){
            a=0;
            randomFact=FACTS[a];
            a=a+1;
        }
        var speechOutput = "Here's your fact: " + randomFact  + "Do you want more facts?" ;
        var reprompt = "Do you want more facts?";
        this.emit(':askWithCard', speechOutput,reprompt, SKILL_NAME, randomFact);
        
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a autism fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Otsimo is an education app for children who have autism syndrome. We are creating educational games and parent app. Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
