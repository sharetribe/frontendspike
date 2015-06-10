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
  }

  render() {
    return (
      <div className="listing-grid-container">
        <div className="listing-grid-container__wrapper">
          { this.props.browsing.listings.map(listing =>
            <GridCard key={listing.id} context={this.props.context} listing={listing} cardImageRatio={this.props.cardImageRatio} />
            )
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
      this.props.context.intents.pushToActionStream('browsing/listings/showMore', value);
    });

    pageChanged.plug(Bacon.mergeAll(
        Bacon.fromEvent(window, "scroll")
      , Bacon.once()
    ));

  }

}

export default componentify(ListingsGridContainer);