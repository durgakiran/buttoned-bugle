import React, { Component } from 'react';
import './App.css';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App"><!--//using class with jsx wont work-->
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
