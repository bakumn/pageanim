import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ItemDetailPage extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      doTransform: false,
      position: null,
      color: null,
    };
  }

  onTransitionWillStart(data) {
      console.log(clickedItemData);
    if (!data.clickedItemData) {
      // Default animate position if user goto this page directly

      this.setState({
        doTransform: true,
        position: { top: 0, left: 0, height: 10, width: 10 },
        color: 'gray',
        borderRadius: 200,
      });
      return;
    }
    this.setState({
      doTransform: true,
      position: data.clickedItemData.position,
      color: data.clickedItemData.color,
      borderRadius: data.clickedItemData.position.width * 2,
    });
  }

  onTransitionDidEnd() {
    // Do your stuff here
  }

  transitionManuallyStart() {
    this.setState({
      position: {
        top: 0,
        height: '100%',
        left: 0,
        width: '100%',
      },
      borderRadius: 0,
      doTransform: true,
    });
  }

  transitionManuallyStop() {
    this.setState({
      doTransform: false,
    });
  }

  render() {
    return (
      <div
        style={{
          transform: this.state.doTransform ?
            `translate3d(0, ${this.state.position.top}px, 0)` :
              undefined,
          height: this.state.doTransform ?
            this.state.position.height : null,
          left: this.state.doTransform ?
            this.state.position.left : null,
          width: this.state.doTransform ?
            this.state.position.width : null,
          backgroundColor: this.state.color,
          borderRadius: this.state.borderRadius,
        }}
        className="transition-item detail-page"
      >
        <Link className="text-center" to="/">
          Item {this.props.match.params.itemId}
        </Link>
        <h1>
          Detail page here
        </h1>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}
