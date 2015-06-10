import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/componentify';
import './styles.css';

class GridCardPrice {

  render() {
    return (
      <div className="grid-card-price">
        {this.props.price}
      </div>
    );
  }
}

export default componentify(GridCardPrice);