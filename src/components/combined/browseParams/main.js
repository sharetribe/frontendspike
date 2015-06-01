import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
import BrowseParam              from '../../basic/browseParam/main';
import './styles.css';

class ListingsParams {

  constructor() {
  }

  render() {
    return (
      <div className="browse-params">
        { this.props.params.map(param =>
          <BrowseParam key={param} title={param} />
          )
        }
      </div>
    );
  }
}

export default branch(componentify(ListingsParams), {
  cursors: {
    params: ['browsing', 'params']
  }
});