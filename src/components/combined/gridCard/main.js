import React                    from "react";
import { componentify }         from '../../shared/js/enhance';
import GridCardImage            from '../../basic/gridCardImage/main';
import GridCardInfo             from '../../combined/gridCardInfo/main';
import './styles.css';

class GridCard {

  render() {
    return (
      <a href={ `/listing/${this.props.info.id}` } className="grid-card">
        <GridCardImage image={this.props.info.image} cardImageRatio={this.props.cardImageRatio} />
        <GridCardInfo info={this.props.info} />
      </a>
    );
  }
}

export default componentify(GridCard);