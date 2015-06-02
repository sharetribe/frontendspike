import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
//import BrowseParams             from '../../combined/browseParams/main';
import './styles.css';

class GridCardImage {

  render() {
    return (
      <div className="grid-card-image">
        <div className="grid-card-image__wrapper">
          <div className="grid-card-image__content">
          </div>
        </div>
      </div>
    );
  }
}

export default componentify(GridCardImage);