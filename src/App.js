import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Compose from './components/Compose'
import Messages from './components/Messages'

const API = 'https://jakemo136-galvanize-message.herokuapp.com/messages'

class App extends Component {
  
  state = {
    messages: [],
    toggleCompose: false,
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }

  }

  async componentDidMount(){
    const response = await fetch(API)
    const responseJson = await response.json()
    this.setState({messages: responseJson})
  }

  submitMessage = async (messageObj) => {
    messageObj = JSON.stringify(messageObj)

    const submitResponse = await fetch(API, {
      method: 'POST',
      body: messageObj,
      headers: this.state.headers
    })
    const responseJson = await submitResponse.json()
    console.log(responseJson)

    this.setState({messages: [...this.state.messages, responseJson]})
  }

  toggle = (prop) => {
    this.setState({[prop]: !this.state[prop]})
    console.log(this.state[prop])
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar toggleCompose={this.toggle}/>
        </div>
        <div className="container">
          <Compose 
            submitMessage={this.submitMessage} 
            toggle={this.toggle} 
            toggleCompose={this.state.toggleCompose}/>
          <Messages messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
