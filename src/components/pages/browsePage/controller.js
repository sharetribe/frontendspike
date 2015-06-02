import React          from 'react';
import Baobab         from 'baobab';
import { root }       from 'baobab-react/higher-order';
import BrowsePage     from './main';

export var page = BrowsePage;

export function render(Component, dataTree, mountNode) {
  // Page element is enhanced with data tree
  // (resulting so calledhigher-order-component)
  var ComposedComponent = root(Component, dataTree);
  React.render(<ComposedComponent />, mountNode);
}

// Initial data as Baobab tree
export var dataTree = new Baobab({
    header: 'header'
  , settings: [
      {name: 'Categories'}
    , {name: 'Filters'}
    , {name: 'Sort by'}
    ]
  , browsing: {
      mode: 'grid'
    , cardImageRatio: '4:3' // '1:1' '4:3'
    , params: ['vehicle', 'wheels']
    , listings: [
        {id: 1, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
      , {id: 2, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
      , {id: 3, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Car! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
      , {id: 4, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
      , {id: 5, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
      , {id: 6, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
      , {id: 7, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat felis, ullamcorper eget rutrum id, feugiat ut nunc.'}
      , {id: 8, image: {url: '/images/empty.png'}, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
      ]
    }
});

export function fetchDataTemplate(component) {
  return  'not implemented yet';// component.getData();
}