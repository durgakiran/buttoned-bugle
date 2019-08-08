import React, { Component } from 'react';
import './App.css';
import Header from './header';


/**
 * we can only add className to actual dom elements
 * we should not add className to custom elements
 */
class App extends Component {
  render() {
    return (
      //using class with jsx wont work, you need to className
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
