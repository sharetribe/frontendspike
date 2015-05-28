import React                from "react";
import { branch }           from 'baobab-react/higher-order';
import { componentify }     from '../../shared/js/enhance';
import './styles.css';

class ListingsGridContainer {

  constructor() {
  }

  render() {
    return (
      <div className="listing-grid-container">
      debugging - listings: {this.props.listings.map(l => l.name).join(', ')}
      </div>
    );
  }
}

export default branch(componentify(ListingsGridContainer), {
  cursors: {
    listings: ['browsing', 'listings']
  }
});