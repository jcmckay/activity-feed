import React, { Component } from 'react';

class ActivityFeed extends Component {

  render() {
    const newFeed = this.props.feed.slice();
    const deleteHandler = this.props.deleteHandler;
    const select = this.props.select;
    return (

      newFeed.reverse().map((f, idx) => <div key={idx}>
        <p>You had a {f.type} with Milton</p>
        <p>{f.text}</p>
        <button type="button" onClick={ () => { select(f.id) }}>Edit</button>
        <button type="button" onClick={ () => { deleteHandler(f.id) }}>Delete</button>
      </div>)
    );
  }
}

export default ActivityFeed;