import React, { Component } from "react";
import { componentify }     from '../../shared/js/componentify';
import BrowseSettings       from '../../combined/browseSettings/main';
import BrowseListings       from '../../combined/browseListings/main';
import './styles.css';

class BrowsePageContent extends Component {

  static dataNeed = {
      children: [BrowseListings]
    ,
    }


  render() {
    let hasData = this.props.browsing != null && this.props.browsing.listings != null
    return !hasData ? <div>Fetching data</div> : (
      <div className="browse-page-content">
        <div className="browse-page-content__settings">
          <BrowseSettings
            branch={this.props.branch.concat('settings')}
            settings={this.props.browsing.settings} />
        </div>
        <div className="browse-page-content__content">
          <BrowseListings
            context={this.props.context}
            streams={this.props.streams}
            branch={this.props.branch.concat(['browsing'])}
            browsing={this.props.browsing} />
        </div>
      </div>
    );
  }
}

export default componentify(BrowsePageContent);