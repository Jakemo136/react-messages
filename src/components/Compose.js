import React, { Component } from 'react';

class Compose extends Component {

  state = {
    name: '',
    message: ''
  }
  
  onChange = (e) => {
    let key = e.target.id
    let value = e.target.value
    this.setState({ [key]: value})
  }
  
  submitInfo = (e) => {
    const {makeMsgObj, toggle} = this.props
    e.preventDefault() 
    makeMsgObj(this.state, "submit") 
    toggle("toggleCompose")
    this.setState({ 
      name: '', 
      message: '' })
  }
  
  render () {
    const {toggleCompose} = this.props
    const style = toggleCompose ? {} : {display: 'none'}
  
    return(
      <div className="mt-4 border border-dark rounded p-4" style={style}>
        <form onSubmit={this.submitInfo}>
          <div className="form-group text-left font-weight-bold h2">
            <label htmlFor="name">What your name!</label>
            <input type="text" className="form-control" id="name" placeholder="Name of you" onChange={this.onChange} value={this.state.name} required/>
            <small id="nameHelp" className="form-text text-muted h6 font-italic">We'll never call you by your real name.</small>
          </div>
          <div className="form-group text-left font-weight-bold h2">
            <label htmlFor="message">What your message!</label>
            <input type="text" className="form-control" id="message" placeholder="Words to sending" onChange={this.onChange} value={this.state.message} required/>
          </div>
          <button type="submit" className="btn btn-dark"><span className="fas fa-people-carry"/>Boop me to send!</button>
          <small className="form-text text-muted h6 font-italic">Newest messages on the bottom, yo</small>
        </form>
      </div>
    )
  }
}
export default Compose