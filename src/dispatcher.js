import Bacon  from 'baconjs';

export default function initDispatcher(busCache) {
  var bus = function(name) {
    return busCache[name] = busCache[name] || new Bacon.Bus();
  };

  return  {
      stream: function(name) {
        return bus(name);
      }

    , push: function(name, value) {
        console.log('stream (', name, ') has new value: ', value);
        bus(name).push(value);
      }

    , plug: function(name, value) {
        bus(name).plug(value);
      }
  };
}
