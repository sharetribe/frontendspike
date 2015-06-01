import React                from "react";
import { branch }           from 'baobab-react/higher-order';
import { componentify }     from '../../shared/js/enhance';
import BrowseSettings       from '../../combined/browseSettings/main';
import BrowseListings       from '../../combined/browseListings/main';
import './styles.css';

class BrowsePageContent {

  constructor() {
  }

  render() {
    return (
      <div className="browse-page-content">
        <div className="browse-page-content__settings">
          <BrowseSettings />
        </div>
        <div className="browse-page-content__content">
          <BrowseListings />
        </div>
      </div>
    );
  }
}

export default componentify(BrowsePageContent);