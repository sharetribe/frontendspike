import React                    from "react";
import { branch }               from 'baobab-react/higher-order';
import { componentify }         from '../../shared/js/enhance';
//import BrowseParam              from '../../combined/browseParam/main';
import './styles.css';

class ListingsParams {

  constructor() {
  }

  render() {
    return (
      <div className="browse-params">
        debugging - params: {this.props.params.join(', ')}
      </div>
    );
  }
}

export default branch(componentify(ListingsParams), {
  cursors: {
    params: ['browsing', 'params']
  }
});