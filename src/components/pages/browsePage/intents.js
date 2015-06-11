import _      from 'lodash';

export default function init(dispatcher, store) {

  dispatcher.addConsumer('browsingCardImageRatio_update', ({branch, ratio}) => {
    store.set(branch, ratio);
  });


  dispatcher.addConsumer('browsingMode_update', ({branch, updated}) => {
    store.set(branch, updated);
  });


  dispatcher.addConsumer('browsingParams_remove', ({branch, paramId}) => {
    //todo might be too slow (if all the params are refreshed by set-function)
    var params = store.get(branch) || [];
    _.remove(params, (p) => p.id === paramId)
    store.set(branch, params);
  });

  dispatcher.addConsumer('browsingParams_add', ({branch, param}) => {
    store.push(branch, [param]);
  });


  dispatcher.addConsumer('browsingSettings_add', ({branch, setting}) => {
    store.push(branch, [param]);
  });


  dispatcher.addConsumer('browsingListings_remove', ({branch, listingId}) => {
    var listings = store.get(branch) || [];
    _.remove(listings, (p) => p.id === listingId)
    store.set(branch, listings);
  });

  dispatcher.addConsumer('browsingListings_add', ({branch, listing}) => {
    store.push(branch, [listing]);
  });

  dispatcher.addConsumer('browsingListing_update', ({branch, listing}) => {
    store.set(branch, listing);
  });

  dispatcher.addConsumer('browsingListings_nextPage', ({branch, newListings}) => {
    store.push(branch, newListings); //todo add & nextPage are the same...
  });

  dispatcher.addConsumer('browsingListings_showMore', (params) => {
   var sharetribeAPIFetchListings = (params) => {
      let id = function() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
          .concat(Date.now());
      };

      dispatcher.push('browsingListings_nextPage', {
        branch: ['browsing', 'listings']
        , newListings: [
            {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Car! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
          , {id: id(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
          ]
        }
      );
    };
    setTimeout(sharetribeAPIFetchListings, 300);
  });
};

