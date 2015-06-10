import Baobab    from 'baobab';
import Bacon     from 'baconjs';
import _         from 'lodash';


export default function initStore(initialData) {

  var appState = initialData;

  var createAppState = function(properties) {
    properties.forEach(property => {
      let initialPropertyValue = _.get(appState, property.key);
      let intentProperty = property.getIntentProperty(initialPropertyValue);
      _.set(appState, property.key, intentProperty);
    })

    return  Bacon.combineTemplate(appState);
  }

  return { createAppState }
}
