import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import BrowseSettingTab         from '../../basic/browseSettingTab/main';
import './styles.css';

class BrowseSettings {

  constructor() {
    this.style = {width: 'calc(100% / 3)', float: 'left'}
  }

  render() {
    return (
      <ul className="browse-settings">
        { this.props.settings.map(s =>
            <li className="browse-settings__tab" key={s.name} style={this.style}><BrowseSettingTab title={s.name} /></li>
          )
        }
      </ul>
    );
  }
}

export default branch(componentify(BrowseSettings), {
  cursors: {
    settings: ['settings']
  }
});