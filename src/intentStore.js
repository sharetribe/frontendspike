import Bacon from 'baconjs';
import _     from 'lodash';

export default function initIntentStore(dispatcher) {

  var intents = [];
  var actionStreams = [];

  var getIntents = function() {
    return intents;
  }

  //arguments after the 'key' should be in the same format as Bacon.update:
  // i.e. createIntentProperty(key,
  //        [streamName1, streamName2], function(previous, streamName1, streamName2),
  //        [streamName3], function(previous, streamName3), ...etc);
  var createIntentProperty = function(key){
    let args = Array.prototype.slice.call(arguments, 1);

    let updateParams = _.chain(args)
      .chunk(2)
      .map( params => [params[0].map(name => createActionStream(name)), params[1]])
      .flatten()
      .value();

    let property = {
        key: key
      , getIntentProperty: function(initialParams) {
          return Bacon.update(initialParams, ...updateParams);
        }
      }

    intents.push(property);
    return property;
  }

  var createActionStream = function(name){
    let existingStream = _.find(actionStreams, name);
    if(existingStream == null) {
      let newStream = dispatcher.stream(name);
      actionStreams.push(name);
      console.log('action stream created: ', name);
      return newStream;
    }
    return false;
  }

  var pushToActionStream = function(streamName, value) {
    dispatcher.push(streamName, value);
  }

  var getActionStream = function(key) {
    return _.find(actionStreams, { 'key': key});
  }

  return {
      createIntentProperty
    , pushToActionStream
    , getIntents
    , getActionStream
  };
}
