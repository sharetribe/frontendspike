import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import BrowseParams             from '../../combined/browseParams/main';
import ListingsGridContainer    from '../../combined/listingsGridContainer/main';
import './styles.css';

class BrowseListings {

  render() {
    return (
      <div className="browse-listings">
        <div className="browse-listings__flags">
          <BrowseParams />
        </div>
        <div className="browse-listings__content">
          <ListingsGridContainer />
        </div>

      </div>
    );
  }
}

export default branch(componentify(BrowseListings), {
  cursors: {
    mode: ['browsing', 'mode']
  }
});