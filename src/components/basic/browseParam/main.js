import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import './styles.css';

class BrowseParam {

  constructor() {
  }

  render() {
    return (
      <a className="browse-param">
        <h1 className="browse-param__title">{this.props.title}</h1>
        <span className="browse-param__delete">&#10006;</span>
      </a>
    );
  }
}

export default branch(componentify(BrowseParam), {
  cursors: {
    settingTitle: ['settings']
  }
});