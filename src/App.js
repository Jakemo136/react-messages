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

  toggle = (prop) => {
    this.setState({[prop]: !this.state[prop]})
  }

  messageToObjAndMethod = (e, method, messageId) => {
    e.preventDefault() 
    let name = e.target.nameInput.value 
    let message = e.target.messageInput.value

    if (method === "submit" || method === "edit") { 
      const messageObj = JSON.stringify({ name, message })
      if (method === "submit"){
        this.submitMessage(messageObj)
        e.target.nameInput.value = ""
        e.target.messageInput.value = ""
      }
      if (method === "edit") {
        this.editMessage(messageId, messageObj)
      }
    }
    if (method === "delete") {
      const idObj = JSON.stringify({ id: messageId })
      this.deleteMessage(messageId, idObj)
    }
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
    const submitRequest = await fetch(`${API}/${messageId}`, {
      method: 'PATCH',
      body: messageObj,
      headers: this.state.headers
    })
    const responseJson = await submitRequest.json()
    const messageIndex = this.state.messages.map(message => message.id).indexOf(messageId)
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
            />
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

export default App