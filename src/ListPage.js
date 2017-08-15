import React, { Component } from 'react';
import { Link } from 'react-router';
import randomColor from 'randomcolor';
import Item from './Item';
import action from './action';

export default class ListPage extends Component {
  constructor(props) {
    super(props);

    const items = [];
    for (let i = 1; i < 40; i++) {
      items.push({
        id: i,
        text: `Item ${i}`,
        color: randomColor(),
      });
    }

    this.state = {
      items,
    };
  }

  render() {
    return (
      <div className="transition-item list-page">
        {this.state.items.map(item => (
          <Link
            key={item.id}
            className="list-item"
            onClick={e => action.onNext({
              name: 'CLICKED_ITEM_DATA',
              data: {
                position: e.target.getBoundingClientRect(),
                color: item.color,
              },
            })}
            to={`/detail/${item.id}`}
          >
            <Item {...item} />
          </Link>
        ))}
      </div>
    );
  }
}
