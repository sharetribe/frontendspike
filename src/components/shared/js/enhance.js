import React, { Component } from "react";

export var componentify = ComposedComponent =>
  class MyComponent extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      //console.log('received props: ',this.props);
    }

    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  };
