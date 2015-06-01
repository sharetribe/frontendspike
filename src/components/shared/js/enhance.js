import React, { Component } from "react";

export var componentify = ComposedComponent => class extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log('received props: ',this.props);
  }

  // _bind(...methods) {
  //   methods.forEach( (method) => this[method] = this[method].bind(this) );
  // }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};