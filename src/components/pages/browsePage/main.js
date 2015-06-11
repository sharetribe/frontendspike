import React, { Component }     from "react";
import { componentify }         from '../../shared/js/componentify';
import Header                   from '../../combined/mainHeader/main';
import BrowsePageContent        from '../../combined/browsePageContent/main';
import * as intents             from './intents';

// if styles are imported then webpack-dev-server knows when to refresh (hot)
// TODO @imported variables are lost from hot loading atm.
import './styles.css';

//Could be done with decorators (ES7), but I didn't use experimental flag yet (in .babelrc)
//@componentify
class BrowsePage extends Component {

  static dataNeed = {
      children: [Header, BrowsePageContent]
    , intents: intents
    }

  constructor(props) {
    super(props);
    this.changeCardRatio = this.changeCardRatio.bind(this);
  }

  render() {
    return (
      <div className="browse-page">
        <div className="browse-page__header">
          <Header
            branch={this.props.branch.concat('header')}
            changeCardRatio={this.changeCardRatio} />
        </div>
        <div className="browse-page__content">
          <BrowsePageContent
            branch={this.props.branch.concat('browsing')}
            {...this.props} />
        </div>
      </div>
    );

  }

  changeCardRatio(ratio) {
    this.props.streams.browsingCardImageRatio_update.push({branch: this.props.branch.concat(['browsing', 'cardImageRatio']), ratio: ratio});
  }

}



// Componentify composes React.Component around our class.
// (Experimenting with hoc - React is still needed as import for some reason.)
export default componentify(BrowsePage);

// Higher order components - why?
// "Unfortunately ES6 launched without any mixin support.
// Therefore, there is no support for mixins when you use React with ES6 classes.
// Instead, we're working on making it easier to support such use cases without
// resorting to mixins." - React
