import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class App extends Component {
  //used for for the home button icon
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  redirect(pageTo) {
    browserHistory.push('/' + pageTo);
  }

  updateUsername(username, callback) {
    console.log('update username to be ', username);
    this.setState({ username }, () => {
      callback();
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is the app component</h1>

        <div className="App-Content">
          {this.props.children && React.cloneElement(this.props.children, {
            // this is where to pass props to all children components
            redirect: this.redirect,
            username: this.state.username,
            updateUsername: this.updateUsername.bind(this)
          })}
        </div>
      </div>

    );
  }
}