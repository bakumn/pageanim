import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PageTransition from './PageTransition';
import action from './action.js';

export default class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      clickedItemData: null,
    };
  }

  componentDidMount() {
    this.obsClickedItemData = action
    .filter(a => a.name === 'CLICKED_ITEM_DATA')
    .map(a => a.data)
    .subscribe(clickedItemData => this.setState({ clickedItemData }));
  }

  componentWillUnmount() {
    this.obsClickedItemData.dispose();
  }

  render() {
    return (
      <div>
        <PageTransition
          timeout={500}
          animateOnInit
          data={{ clickedItemData: this.state.clickedItemData }}
        >
          {this.props.children}
        </PageTransition>
      </div>
    );
  }
}
