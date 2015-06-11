import Bacon  from 'baconjs';

export default function initDispatcher(intentStreams) {

  var _bus = function(name) {
    return intentStreams[name] = intentStreams[name] || new Bacon.Bus();
  };


  var stream = function(name) {
    return _bus(name);
  }

  var getStreamNames = function() {
    return Object.keys(intentStreams);
  }
  var streams = function() {
    return intentStreams;
  }

  var push = function(name, value) {
    console.log('stream (', name, ') has new value: ', value);
    _bus(name).push(value);
  }

  var plug = function(name, value) {
    _bus(name).plug(value);
  }

  var addConsumer = function(streamName, handlerFunction) {
    // todo: streamName: if string -> create stream, if stream -> plug stream
    var intents = stream(streamName);
    intents.onValue(value => handlerFunction(value));
  }


  return  {
      getStreamNames
    , streams
    , stream
    , push
    , plug
    , addConsumer
  };
}
