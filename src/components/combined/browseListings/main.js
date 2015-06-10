import React, {Component}       from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/componentify';
import BrowseParams             from '../../combined/browseParams/main';
import ListingsGridContainer    from '../../combined/listingsGridContainer/main';
import './styles.css';

class BrowseListings extends Component {

  static dataNeed = {
      children: [ListingsGridContainer]
    }

  render() {
    return (
      <div className="browse-listings">
        <div className="browse-listings__flags">
          <BrowseParams context={this.props.context} params={this.props.browsing.params} />
        </div>
        <div className="browse-listings__content">
          <ListingsGridContainer context={this.props.context} browsing={this.props.browsing} cardImageRatio={this.props.browsing.cardImageRatio} />
        </div>

      </div>
    );
  }
}

export default componentify(BrowseListings);