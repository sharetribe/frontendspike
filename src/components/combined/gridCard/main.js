import React, { Component }   from "react";
import { componentify }       from '../../shared/js/componentify';
import GridCardImage          from '../../basic/gridCardImage/main';
import GridCardDescription    from '../../basic/gridCardDescription/main';
import GridCardPrice          from '../../basic/gridCardPrice/main';
import GridCardAuthor         from '../../basic/gridCardAuthor/main';
import './styles.css';

class GridCard extends Component{

  static dataNeed = {
    entity: [ 'st:listing/id'
            , 'st:listing/title'
            , 'st:listing/price'
            , 'st:listing/author/avatar'
            , 'st:listing/author/name']
  }

  constructor(props) {
    super(props);
    let branch = this.props.branch;
    let data = this.props.listing;
    data.pastel = `hsl(${ Math.floor(Math.random() * 360)}, 100%, 87.5%)`;

    this.pastel = data.pastel;
    this.props.updateListing.push({branch: branch, listing: data});
    this.state = { style: {width: '20rem'}};
    this.handleResize = this.handleResize.bind(this);
  }

  render() {
    return (
      <a
        href={ `/listing/${this.props.listing.id}` }
        className="grid-card"
        style={this.state.style}>
        <GridCardImage
          image={this.props.listing.image}
          cardImageRatio={this.props.cardImageRatio}
          pastel={this.pastel} />
        <div className="grid-card__info">
          <div className="grid-card__info-content">
            <GridCardDescription description={this.props.listing.description} />
          </div>
          <div className="grid-card__info-footer">
            <GridCardPrice price={this.props.listing.price} />
            <GridCardAuthor author={this.props.listing.author} />
          </div>
        </div>
      </a>
    );
  }




  // Testing resize with react
  // TODO test with classes instead of calculation...
  // ...and wrap these elements with li tags on grid container
  handleResize(e) {
    var w = document.getElementsByClassName('grid-card')[0].parentNode.offsetWidth;
    var x = 300;
    var gutter = 20;
    var minWidth = 280;
    var columnWidth = columns => w / columns - gutter;
    if(columnWidth(6.0) > minWidth) {
      x = columnWidth(6.0);
    } else if(columnWidth(6.0) > minWidth) {
      x = columnWidth(6.0);
    } else if(columnWidth(4.0) > minWidth) {
      x = columnWidth(4.0);
    } else if(columnWidth(3.0) > minWidth) {
      x = columnWidth(3.0);
    } else if(columnWidth(2.0) > minWidth) {
      x = columnWidth(2.0);
    } else {
      x = columnWidth(1.0);
    }
    this.setState({style: {width: (x / 16.0)+'rem'}});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

}

export default componentify(GridCard);