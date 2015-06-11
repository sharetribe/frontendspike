import React, {Component}       from "react";
import { componentify }         from '../../shared/js/componentify';
import './styles.css';


class BrowseParam extends Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <a className="browse-param" onClick={ this.clickHandler }>
        <h1 className="browse-param__title">{this.props.param.title}</h1>
        <span className="browse-param__delete">&#10006;</span>
      </a>
    );
  }

  clickHandler(event){
   this.props.removeAction(this.props.param.id);
  }
}


export default componentify(BrowseParam);