var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1()
{
    console.log(' listener executed ');
}

eventEmitter.addListener('connection ', listener1);
eventEmitter.on('connection', listener1);
eventEmitter.emit('connection');