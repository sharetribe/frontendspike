import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import './styles.css';

class GridCardDescription {

  render() {
    return (
      <p className="grid-card-description">
        {this.props.description}
      </p>
    );
  }
}

export default componentify(GridCardDescription);