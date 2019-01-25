import React, { Component } from 'react';

class Message extends Component  {
  state = {
    toggleEdit: false,
    name: this.props.name,
    message: this.props.message
  }

  toggle = () => {
    this.setState({toggleEdit : !this.state.toggleEdit})
  }

  onChange = (e) => {
    let key = e.target.id
    let value = e.target.value
    this.setState({ [key]: value})
  }

  submitInfo = (e) => {
    e.preventDefault()
    this.props.makeMsgObj(this.state, "edit", this.props.messageId)
    this.toggle()
  }

  render () {
    const {messageId, name, message, deleteMessage} = this.props
    const style = this.state.toggleEdit ? {} : {display: 'none'}

    return(
      <div className="row mt-2 mb-2">
        <div className="col md-6">
          <div className="card text-left">
            <h5 className="card-header">Mysterious Secret Incoming Cryptic Message</h5>
            <div className="card-body">
              <h6 className="card-title font-italic font-weight-bold">{name}</h6>
              <p className="card-text">{message}</p>
              <button className="btn btn-secondary" onClick={this.toggle}>
              <span className="far fa-edit"/>Boop to Edit</button>
              <button className="btn btn-danger" onClick={e=>{deleteMessage(messageId)}}><span className="far fa-trash-alt"/>Boop to Delete</button>
            </div>
          </div>
        </div>
        <div className="col md-6" style={style}>
          <div className="card text-left bg-dark text-light">
            <h5 className="card-header">Oh look, <i className="far fa-hand-point-left"></i> <em>somebody</em> wants to edit a message</h5>
            <div className="card-body">
              <form onSubmit={this.submitInfo}>
              <input type="text" className="form-control" id="name" defaultValue={name} onChange={this.onChange} required/>
              <input type="text" className="form-control" id="message" defaultValue={message} onChange={this.onChange} required/>
              <button className="btn btn-outline-warning mt-2" type="Submit">
              <span className="fas fa-hammer"/>DO IT</button> 
              </form>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default Message