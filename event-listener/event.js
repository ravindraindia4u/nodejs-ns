var events = require('events');
var eventEmitter = new events.EventEmitter();


// Create an event listener
var registerListener = function(){
    console.log('I am listening to the event');
}

// Assign event to listner
eventEmitter.on()