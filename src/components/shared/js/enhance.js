import React, { Component } from "react";

export var componentify = ComposedComponent => class extends Component {

  constructor(props) {
    super(props);
    //this.state = { data: null };
  }

  getData() {
    return new ComposedComponent.getDataTemplate() || null;
  }

  componentDidMount() {
    //this.setState({ data: 'Hello World!' });
    console.log('received props: ',this.props);
  }

  // _bind(...methods) {
  //   methods.forEach( (method) => this[method] = this[method].bind(this) );
  // }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};