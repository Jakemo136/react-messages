import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Compose from './components/Compose'
import Messages from './components/Messages'

const API = 'https://jakemo136-galvanize-message.herokuapp.com/messages'

class App extends Component {
  
  state = {
    messages: [],
    toggleCompose: false
  }

  async componentDidMount(){
    const response = await fetch(API)
    const responseJson = await response.json()
    this.setState({messages: responseJson})
    console.log(this.state.messages)
  }



  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div className="container">
          <Compose />
          <Messages messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
