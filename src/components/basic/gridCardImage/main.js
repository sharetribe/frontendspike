import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
//import BrowseParams             from '../../combined/browseParams/main';
import './styles.css';

class GridCardImage {

  render() {
    return (
      <div className="grid-card-image">
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