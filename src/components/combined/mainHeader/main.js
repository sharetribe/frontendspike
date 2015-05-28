import React                from "react";
import { branch }           from 'baobab-react/higher-order';
import { componentify }     from '../../shared/js/enhance';
import './styles.css';

class MainHeader {


  constructor(props) {
    console.log('MainHeader constructor props: ', props);
  }

  render() {
    return (
      <div className="main-header">
        debugging: {this.props.header}
      </div>
    );
  }
}

// Enhance header component with correct cursor(s) from the data tree
export default branch(componentify(MainHeader), {
  cursors: {
    header: ['header'] // array contains branch path i.e. name: ['user', 'name']
  }
});