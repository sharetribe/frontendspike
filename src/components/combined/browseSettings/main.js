import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import BrowseSettingTab         from '../../basic/BrowseSettingTab/main';
import './styles.css';

class BrowseSettings {

  constructor() {
    this.style = {width: '33.33333%', float: 'left'}
  }

  render() {
    return (
      <div className="browse-settings">
        <ul>
        { this.props.settings.map(s =>
          <li className="browse-settings__tab" key={s.name} style={this.style}><BrowseSettingTab title={s.name} /></li>
          )
        }
        </ul>
      </div>
    );
  }
}

export default branch(componentify(BrowseSettings), {
  cursors: {
    settings: ['settings']
  }
});