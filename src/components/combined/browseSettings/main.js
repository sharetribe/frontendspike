import React, { Component }     from "react";
import { componentify }         from '../../shared/js/componentify';
import IconTab         from '../../basic/iconTab/main';
import './styles.css';

class BrowseSettings extends Component {

  constructor(props) {
    super(props);
    this.style = {width: 'calc(100% / 3)'}
  }

  render() {
    return (
      <ul className="browse-settings">
        { this.props.settings.map(s =>
            <li className="browse-settings__tab" key={s.name} style={this.style}><IconTab icon={"\u2630"} title={s.name} /></li>
          )
        }
      </ul>
    );
  }
}

export default componentify(BrowseSettings);