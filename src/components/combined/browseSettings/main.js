import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import './styles.css';

class BrowseSettings {

  constructor() {
  }

  render() {
    return (
      <div className="browse-settings">
        debugging: {this.props.settings.map(s => s.name).join(', ')}
      </div>
    );
  }
}

export default branch(componentify(BrowseSettings), {
  cursors: {
    settings: ['settings']
  }
});