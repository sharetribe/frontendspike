import React                    from "react";
import { componentify }         from '../../shared/js/componentify';
import './styles.css';

class IconTab {

  constructor() {
  }

  render() {
    return (
      <a className="browse-setting-tab">
        <span className="browse-setting-tab__icon">{this.props.icon}</span>
        <h1 className="browse-setting-tab__title">{this.props.title}</h1>
        <span className="browse-setting-tab__arrow">&#x25BC;</span>
      </a>
    );
  }
}

export default componentify(IconTab);