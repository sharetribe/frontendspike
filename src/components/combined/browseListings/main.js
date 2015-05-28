import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import './styles.css';

class BrowseListings {

  constructor() {
  }

  render() {
    return (
      <div className="browse-listings">
        debugging: {this.props.listings}
      </div>
    );
  }
}

export default branch(componentify(BrowseListings), {
  cursors: {
    listings: ['listings']
  }
});