import React, {Component} from 'react';
import PageTransition from 'react-router-page-transition';
import action from './action';

class Home extends Component {
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
          data={{ clickedItemData: this.state.clickedItemData }}
        >
          {this.props.children}
        </PageTransition>
      </div>
    );
  }
}

export default Home;
