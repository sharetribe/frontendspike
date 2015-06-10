import _      from 'lodash';

export function init(intentStore) {

  intentStore.createIntentProperty(
      ['browsing', 'cardImageRatio']
    , ['browsing/cardImageRatio/update'], (prevRatio, newRatio) =>  newRatio);
}
