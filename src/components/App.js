import React, { Component } from 'react';
import logo from '../images/svg/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app__intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
