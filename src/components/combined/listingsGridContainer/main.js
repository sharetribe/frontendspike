import React, { Component } from "react";
import _                    from 'lodash';
import Bacon                from "baconjs";
import { componentify }     from '../../shared/js/componentify';
import GridCard             from '../../combined/gridCard/main';
import './styles.css';

class ListingsGridContainer extends Component {

  static dataNeed = {
      children: [GridCard]
    , collection: {
        querySize: 5
      , queryEntity: 'st:listing'
      }
    }

  constructor(props) {
    super(props);
    //this.loading = false;
    this.branch = this.props.branch.concat(['listings']);
  }

  render() {
    return (
      <div className="listing-grid-container">
        <div className="listing-grid-container__wrapper">
          { this.props.browsing.listings.map( function(listing, index) {
            return (<GridCard
              key={ listing.id }
              context={ this.props.context }
              updateListing={ this.props.streams.browsingListing_update }
              branch={ this.branch.concat([index]) }
              listing={ listing }
              cardImageRatio={ this.props.browsing.cardImageRatio } />)
            }.bind(this))
          }
        </div>
      </div>
    );
  }






  componentDidMount() {

    // TODO: improve & move this to the actions & intents
    var pageChanged = new Bacon.Bus();

    var showMore = pageChanged
      .filter(function() {
        let element = document.getElementsByClassName('listing-grid-container')[0];
        let bottom = element.offsetTop + element.offsetHeight;
        return bottom - window.pageYOffset < window.innerHeight * 2;// && !this.loading;
      });


    showMore.onValue(value => {
      //this.loading = true;
      this.props.streams.browsingListings_showMore.push(value);
    });

    pageChanged.plug(Bacon.mergeAll(
        Bacon.fromEvent(window, "scroll")
      , Bacon.once()
    ));

  }

}

export default componentify(ListingsGridContainer);