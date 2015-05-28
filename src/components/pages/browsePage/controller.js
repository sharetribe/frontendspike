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
    , listings: [{name: 'bike'}, {name: 'car'}]
    }
});

export function fetchDataTemplate(component) {
  return  'not implemented yet';// component.getData();
}