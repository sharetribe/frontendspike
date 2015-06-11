import React              from 'react';
import initStore          from './store';
import initDispatcher     from '../../../dispatcher';
import BrowsePage         from './main';
import initIntents        from './intents';


export default function init(initialData, mountNode) {
  var store = initStore(initialData);
  var streamCache = {};
  var dispatcher = initDispatcher(streamCache);
  initIntents(dispatcher, store);

  var render = function(store) {
    store.getUpdateStream().onValue( updated => {

      //let sharedContext = {};
      React.render(<BrowsePage branch={[]} streams={dispatcher.streams()} {...store.getAppState()} />, mountNode);
      console.log("page rendered");
    })
  }

  //var dataNeed = BrowsePage.getDataNeed(intentStore);
  //console.log('collected dataNeed: ', dataNeed);

  render(store);
  store.set('initialized', true);








  // // Just for testing purposes to emulate ajax fetch
  // var fetchData = function() {
  //   intentStore.pushToActionStream('browsing/params/create', [{id: 1, title: 'vehicle'}, {id: 2, title: 'wheels'}]);
  //   intentStore.pushToActionStream('browsing/settings/create', [
  //         {name: 'Categories'}
  //       , {name: 'Filters'}
  //       , {name: 'Sort by'}
  //       ]);
  //   intentStore.pushToActionStream('browsing/listings/nextPage', [
  //         {id: 1, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
  //       , {id: 2, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
  //       , {id: 3, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Car! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
  //       , {id: 4, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
  //       , {id: 5, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
  //       , {id: 6, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
  //       , {id: 7, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
  //       , {id: 8, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
  //       ]);
  // }

  // setTimeout(fetchData, 500);


  return {
      store
    , dispatcher
    , render
  }
}