import React, { Component }     from "react";
import { componentify }         from '../../shared/js/componentify';
import './styles.css';

class GridCardImage extends Component {

  render() {
    return (
      <div className="grid-card-image" style={{backgroundColor: this.props.pastel}}>
        <div className={this.imageTypeClass(this.props.cardImageRatio)}>
          <div className="grid-card-image__content">
          </div>
        </div>
      </div>
    );
  }

  imageTypeClass(type) {
    switch (type) {
      case '3:4':
        return "grid-card-image__wrapper__portrait";
      case '4:3':
        return "grid-card-image__wrapper__landscape";
      default:
        return "grid-card-image__wrapper__square";
    }
  }

}

export default componentify(GridCardImage);