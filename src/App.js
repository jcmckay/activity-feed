import React, { Component } from 'react';
import ActivityForm from './ActivityForm';
import ActivityFeed from './ActivityFeed';
import './App.css';

class App extends Component {

  state = {
    activityFeed: [],
    activity: null
  }

  activityFeedUpdateHandler = (activity) => {
    const feed = this.state.activityFeed;
    feed.push(activity);
    this.setState({activityFeed: feed});
  }

  deleteHandler = (id) => {
    const newFeed = this.state.activityFeed.filter((f) => f.id !== id);

    this.setState({ activityFeed: newFeed});
  }

  selectHandler = (id) => {
    const activity = this.state.activityFeed.filter((f) => {f.id === id});
    this.setState({activity: activity});
  }

  editHandler = (activity) => {
    for(let i=0; i<this.state.activityFeed.length; i++) {
      if(activity.id === this.state.activityFeed[i].id) {
        const newFeed = this.state.activityFeed;
        newFeed.splice(i,1, activity);
        this.setState({ activityFeed: newFeed});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ActivityForm activity={this.state.activity} submit={this.activityFeedUpdateHandler} edit={this.editHandler}/>
        <ActivityFeed feed={this.state.activityFeed} deleteHandler={this.deleteHandler} select={this.selectHandler}/>
      </div>
    );
  }
}

export default App;
