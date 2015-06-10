import React, { Component } from "react";

export function componentify(ComposedComponent) {

  var MyComponent = class extends Component {

    constructor(props) {
      super(props);
    };


    componentDidMount() {
      //console.log('received props: ',this.props);
    };

    render() {
      return <ComposedComponent context={this.props.context} {...this.props} {...this.state} />;
    };

    // TODO fix me.
    static getDataNeed = function(intentStore) {
      var need = ComposedComponent.dataNeed;
      var componentTree = {entity: need.entity}

      if(need.children != null && need.children.length > 0) {
        componentTree.children = need.children.map(ChildComponent => ChildComponent.getDataNeed(intentStore) );
      }

      if(need.collection != null) {
        componentTree.collection = need.collection;
      }

      if(need.intents != null) {
        need.intents.init(intentStore);
      }
      return componentTree;
    }


  };

  return MyComponent;
}