import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'uuid';
import './acitivity-form.css';

class ActivityForm extends Component {

  constructor(props) {
    super(props);
    const activity = props.activity;
    console.log(activity);
    this.state = {
      id: activity ? activity.id : '',
      text: activity ? activity.text : '',
      type: activity ? activity.type : 'Message',
      time: activity ? activity.time : null
    }
  }


  textChangedHandler = (e) => {
    this.setState({text: e.target.value});
  }

  typeChangeHandler = (type) => {
    this.setState({type: type});
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if(this.state.id) {
          const activity = {text: this.state.text, type: this.state.type, time: this.state.time, id: this.state.id};
          this.props.edit(activity);
        } else {
          const activity = {text: this.state.text, type: this.state.type, time: this.state.time, id: this.state.id};
          this.props.submit(activity);
        }


        this.setState({ type: 'Message', text: ''});
      }}>
        <textarea onChange={this.textChangedHandler} value={this.state.text}></textarea>
        {/* Message/Phone/Coffee/Beer/Meeting Note */}
        <ul className="message-types">
          <li className={this.state.type === 'Message' ? 'active' : ''} onClick={() => {this.typeChangeHandler('Message')}}>Message</li>
          <li className={this.state.type === 'Phone' ? 'active' : ''} onClick={() => {this.typeChangeHandler('Phone')}}>Phone</li>
          <li className={this.state.type === 'Coffee' ? 'active' : ''} onClick={() => {this.typeChangeHandler('Coffee')}}>Coffee</li>
          <li className={this.state.type === 'Beer' ? 'active' : ''} onClick={() => {this.typeChangeHandler('Beer')}}>Beer</li>
          <li className={this.state.type === 'Meeting Note' ? 'active' : ''} onClick={() => {this.typeChangeHandler('Meeting Note')}}>Meeting Note</li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    )
  }

}

export default ActivityForm;