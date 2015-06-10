import _      from 'lodash';

export function init(intentStore) {

  intentStore.createIntentProperty(
      ['browsing', 'mode']
    , ['browsing/mode/update'], (prev, next) =>  next);

  intentStore.createIntentProperty(
      ['browsing', 'params']
    , ['browsing/params/remove'], (params, paramIdToRemove) => {
                                    _.remove(params, (p) => p.id === paramIdToRemove);
                                    return params;
                                  }
    , ['browsing/params/create'], (params, newParams) => {
                                    let p = params || [];
                                    return _.uniq(p.concat(newParams), 'id');
                                  }
  );

  intentStore.createIntentProperty(
      ['browsing', 'settings']
    , ['browsing/settings/create'], (settings, newSettings) => {
                                      let s = settings || [];
                                      return _.uniq(s.concat(newSettings), 'name');
                                    }
  );

  intentStore.createIntentProperty(
      ['browsing', 'listings']
    , ['browsing/listings/remove'], (listings, listingIdToRemove) => {
                                      _.remove(listings, (listing) => listing.id === listingIdToRemove);
                                      return listings;
                                    }
    , ['browsing/listings/create'], (listings, newListing) => {
                                      let l = listings || [];
                                      return l.concat([newListing]);
                                    }
    , ['browsing/listings/update'], (listings, updatedListings) => {
                                      return updatedListings;
                                    }
    , ['browsing/listings/nextPage'], (listings, newListings) => {
                                        let l = listings || [];
                                        return _.uniq(l.concat(newListings), 'id');
                                      }
    , ['browsing/listings/showMore'], (listings, event) => {
                                        setTimeout( (event) => {
                                          let s4 = function() {
                                            return Math.floor((1 + Math.random()) * 0x10000)
                                              .toString(16)
                                              .substring(1);
                                          }
                                          intentStore.pushToActionStream('browsing/listings/nextPage', [
                                              {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Car! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
                                            , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
                                            ]);
                                        }, 300);
                                        return listings;
                                      }
  );

  // intentStore.createIntentProperty(
  //     ['browsing']
  //   , ['browsing/listings/nextPage'], (browsing, newListings) => {
  //                                       let l = browsing.listings || [];
  //                                       browsing.listings = _.uniq(l.concat(newListings), 'id');
  //                                       browsing.loading = false;
  //                                       return browsing;
  //                                     }
  //   , ['browsing/listings/showMore'], (browsing, event) => {
  //                                       setTimeout( (event) => {
  //                                         let s4 = function() {
  //                                           return Math.floor((1 + Math.random()) * 0x10000)
  //                                             .toString(16)
  //                                             .substring(1);
  //                                         }
  //                                         intentStore.pushToActionStream('browsing/listings/nextPage', [
  //                                             {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Car! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
  //                                           , {id: s4(), image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
  //                                           ]);
  //                                       }, 300);
  //                                       browsing.loading = true;
  //                                       return browsing;
  //                                     }

  //     );
}

    // let initialData = {
    //     header: 'header'
    //   , browsing: {
    //       mode: browseMode
    //     , settings: [
    //          {name: 'Categories'}
    //        , {name: 'Filters'}
    //        , {name: 'Sort by'}
    //        ]
    //     , params: [{id: 1, title: 'vehicle'}, {id: 2, title: 'wheels'}]
    //     , listings: [
    //         {id: 1, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
    //       , {id: 2, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
    //       , {id: 3, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Car! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
    //       , {id: 4, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
    //       , {id: 5, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
    //       , {id: 6, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
    //       , {id: 7, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
    //       , {id: 8, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
    //       ]
    //     }
    //   }
