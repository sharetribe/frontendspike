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
    , params: ['vehicle', 'wheels']
    , listings: [
        {id: 1, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'bike bike bike bike bike'}
      , {id: 2, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car car'}
      , {id: 3, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car car car car car car car'}
      , {id: 4, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'truck'}
      , {id: 5, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'motorbike motorbike motorbike motorbike motorbike'}
      , {id: 6, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car2 car2 car2 car2 car2 car2 car2'}
      , {id: 7, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car3 car3 car3 car3 car3 car3 car3 car3 car3 '}
      , {id: 8, price: '3.00 €', author: {name: 'John Doe', avatar: '/person/1/avatar/tiny'}, description: 'car4 car4 car4 car4'}
      ]
    }
});

export function fetchDataTemplate(component) {
  return  'not implemented yet';// component.getData();
}