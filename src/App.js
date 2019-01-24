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
    },
    composeDefault: {
      name: '',
      message: ''
    }
  }

  async componentDidMount(){
    const response = await fetch(API)
    const responseJson = await response.json()
    this.setState({messages: responseJson})
  }

  submitMessage = async (messageObj) => {

    const submitRequest = await fetch(API, {
      method: 'POST',
      body: messageObj,
      headers: this.state.headers
    })
    const responseJson = await submitRequest.json()

    this.setState({messages: [...this.state.messages, responseJson]})
  }

  editMessage = async (messageId, messageObj) => {
    
    let messageIndex = this.state.messages.map(message => message.id).indexOf(messageId)

    const submitRequest = await fetch(`${API}/${messageId}`, {
      method: 'PATCH',
      body: messageObj,
      headers: this.state.headers
    })
    const responseJson = await submitRequest.json()
    this.setState({messages: [
      ...this.state.messages.slice(0, messageIndex),
      responseJson,
      ...this.state.messages.slice(messageIndex+1)
    ]})
  }
  
  deleteMessage = async (messageId, messageObj) => {
    let newMessages = this.state.messages.filter(message => (message.id !== messageId))
    
    await fetch(`${API}/${messageId}`, {
      method: 'DELETE',
      body: messageObj,
      headers: this.state.headers
    })
    this.setState({messages: newMessages})
  }

  toggle = (prop) => {
    this.setState({[prop]: !this.state[prop]})
  }
  
  messageToObjAndMethod = (e, method, messageId) => {

    if (method === "submit") {
      let messageObj = {
        name: e.target.nameInput.value,
        message: e.target.messageInput.value 
      }
      messageObj = JSON.stringify(messageObj)
      this.submitMessage(messageObj)
    }
    else if (method === "edit") {
      if (e.target.messageInput.value.length < 1 && e.target.nameInput.value.length < 1) {
        return
      }
      else if (e.target.nameInput.value.length < 1 && e.target.messageInput.value.length >= 1) {
        let messageObj = {
          message: e.target.messageInput.value 
        }  
        messageObj = JSON.stringify(messageObj)
        this.editMessage(messageId, messageObj)
      }
      else if (e.target.messageInput.value.length < 1 && e.target.nameInput.value.length >=1) {
        let messageObj = {
          name: e.target.nameInput.value
        }  
        messageObj = JSON.stringify(messageObj)
        this.editMessage(messageId, messageObj)
      }
      else {
        let messageObj = {
          name: e.target.nameInput.value,
          message: e.target.messageInput.value 
        }
        messageObj = JSON.stringify(messageObj)
        this.editMessage(messageId, messageObj)
      } 
      
    }
    else if (method === "delete") {
      let messageObj = {
        id: messageId
      }
      messageObj = JSON.stringify(messageObj)
      this.deleteMessage(messageId, messageObj)
    }
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
            toggleCompose={this.state.toggleCompose}
            msgToObjAndMethod={this.messageToObjAndMethod}
            defaultState={this.state.composeDefault}/>
          <Messages 
            messages={this.state.messages} 
            editMessage={this.editMessage}
            deleteMessage={this.deleteMessage}
            msgToObjAndMethod={this.messageToObjAndMethod}/>
        </div>
      </div>
    );
  }
}

export default App;
