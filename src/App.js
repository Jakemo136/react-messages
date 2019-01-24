import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div>Compose functionality</div>
        <div>Message display!</div>
      </div>
      </div>
    );
  }
}

export default App;
