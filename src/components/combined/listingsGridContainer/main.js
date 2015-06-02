import React                from "react";
import { branch }           from 'baobab-react/higher-order';
import { componentify }     from '../../shared/js/enhance';
import GridCard          from '../../combined/gridCard/main';
import './styles.css';

class ListingsGridContainer {

  constructor() {
  }

  render() {
    return (
      <div className="listing-grid-container">
        <div className="listing-grid-container__wrapper">
          { this.props.listings.map(listing =>
            <GridCard key={listing.id} info={listing} />
            )
          }
        </div>
      </div>
    );
  }
}

export default branch(componentify(ListingsGridContainer), {
  cursors: {
    listings: ['browsing', 'listings']
  }
});