import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Compose from './components/Compose'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="">
        <Navbar />
      </div>
      <div className="container">
        <Compose />
        <div>Message display!</div>
      </div>
      </div>
    );
  }
}

export default App;
