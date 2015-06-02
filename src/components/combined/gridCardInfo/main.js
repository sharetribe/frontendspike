import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import GridCardDescription   from '../../basic/gridCardDescription/main';
import GridCardPrice         from '../../basic/gridCardPrice/main';
import GridCardAuthor        from '../../basic/gridCardAuthor/main';
import './styles.css';

class GridCardInfo {

  render() {
    return (
      <div className="grid-card-info">
        <div className="grid-card-info__content">
          <GridCardDescription description={this.props.info.description} />
        </div>
        <div className="grid-card-info__footer">
          <GridCardPrice price={this.props.info.price} />
          <GridCardAuthor author={this.props.info.author} />
        </div>
      </div>
    );
  }
}

export default componentify(GridCardInfo);