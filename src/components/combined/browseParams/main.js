import React, {Component}       from "react";
import { componentify }         from '../../shared/js/componentify';
import BrowseParam              from '../../basic/browseParam/main';
import './styles.css';

class BrowseParams extends Component {

  constructor(props) {
    super(props);
    this.removeParam = this.removeParam.bind(this);
  }

  render() {
    return (
      <div className="browse-params">
        { this.props.params.map(param =>
          <BrowseParam context={this.props.context} key={param.id} param={param} removeAction={this.removeParam} />
          )
        }
      </div>
    );
  }

  removeParam(paramId) {
    this.props.context.intents.pushToActionStream('browsing/params/remove', paramId);
  }
}

export default componentify(BrowseParams);