import React                    from "react";
//import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/componentify';
import './styles.css';

class GridCardAuthor {

  render() {
    return (
      <div className="grid-card-author">
        <img className="grid-card-author__avatar" src={this.props.author.avatar} title={this.props.author.name} />
        <p className="grid-card-author__name">{this.props.author.name}</p>
      </div>
    );
  }
}

export default componentify(GridCardAuthor);