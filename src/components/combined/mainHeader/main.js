import React, { Component } from "react";
import { branch }           from 'baobab-react/higher-order';
import { componentify }     from '../../shared/js/componentify';
import * as controller      from '../../pages/browsePage/controller';
import * as intents         from './intents';
import './styles.css';

class MainHeader extends Component {

  static dataNeed = {
    entity: [ 'st:person/id'
            , 'st:person/name'
            , 'st:person/inbox/unread/count']
    , intents: intents
  }

  constructor(props) {
    super(props);
    this.intents = this.props.context.intents;
    this.clickHandler = this.clickHandler.bind(this);

  }

  render() {
    return (
      <div className="main-header">
        for debugging: {this.props.header}&nbsp;
        <span onClick={this.clickHandler} data-ratio="1:1">(1:1)</span>&nbsp;
        <span onClick={this.clickHandler} data-ratio="3:4">(3:4)</span>&nbsp;
        <span onClick={this.clickHandler} data-ratio="4:3">(4:3)</span>
      </div>
    );
  }

  clickHandler(event){
    this.intents.pushToActionStream('browsing/cardImageRatio/update', event.target.dataset.ratio)
  }

}


// Enhance header component with correct cursor(s) from the data tree
export default componentify(MainHeader);
// export default branch(componentify(MainHeader), {
//   cursors: {
//     header: ['header'] // array contains branch path i.e. name: ['user', 'name']
//   }
// });