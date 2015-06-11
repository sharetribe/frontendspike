import Baobab    from 'baobab';
import Bacon     from 'baconjs';
import _         from 'lodash';


export default function initStore(initialData) {

  var appState = new Baobab(initialData, {
    clone: true // Default: false
  });
  var updateBus = new Bacon.Bus();
  appState.on('update', () => {
    console.log('appState refreshed: ', appState.get());
    updateBus.push('update')
  });

  var getTree = function() {
    return appState;
  }

  var getUpdateStream = function() {
    return updateBus;
  }

  var getAppState = function() {
    return appState.get();
  }

  var get = function(branch) {
    return appState.get(branch);
  }

  var set = function(branch, value) {
    appState.set(branch, value);
  }

  var push = function(branch, valueArray) {
    appState.select(branch).push(valueArray);
  }


  return {
      getAppState
    , get
    , set
    , push
    , getUpdateStream
    , getTree
    }
}
