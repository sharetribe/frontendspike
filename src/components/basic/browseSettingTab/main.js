import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import './styles.css';

class BrowseSettingTab {

  constructor() {
  }

  render() {
    return (
      <a className="browse-setting-tab">
        <span className="browse-setting-tab__icon">&#x2630;</span>
        <h1 className="browse-setting-tab__title">{this.props.title}</h1>
        <span className="browse-setting-tab__arrow">&#x25BC;</span>
      </a>
    );
  }
}

export default branch(componentify(BrowseSettingTab), {
  cursors: {
    settingTitle: ['settings']
  }
});