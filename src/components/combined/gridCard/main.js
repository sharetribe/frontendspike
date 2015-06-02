import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import GridCardImage         from '../../basic/gridCardImage/main';
import GridCardInfo          from '../../combined/gridCardInfo/main';
import './styles.css';

class GridCard {

  render() {
    return (
      <a href={ `/listing/${this.props.info.id}` } className="grid-card">
        <GridCardImage url={this.props.info.url} />
        <GridCardInfo info={this.props.info} />
      </a>
    );
  }
}

export default componentify(GridCard);