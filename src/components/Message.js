import React, { Component } from 'react';

class Message extends Component  {
  state = {
    toggleEdit: false
  }
  
  toggle = () => {
    this.setState({toggleEdit : !this.state.toggleEdit})
  }

  render () {
    const {messageId, name, message, msgToObjAndMethod} = this.props
    const styleOn = this.state.toggleEdit ? {} : {display: 'none'}
    // const styleOff = this.state.toggleEdit ? {display: 'none'} : {}

    return(
      <div className="row mt-2 mb-2">
        <div className="col md-6">
          <div className="card text-left">
            <h5 className="card-header">Mysterious Secret Incoming Cryptic Message</h5>
            <div className="card-body">
              <h6 className="card-title font-italic font-weight-bold">{name}</h6>
              <p className="card-text">{message}</p>
              <button className="btn btn-secondary" onClick={e=>this.toggle()}><span className="far fa-edit"/>Boop to Edit</button>
              <button className="btn btn-danger" onClick={e=>msgToObjAndMethod(e, "delete", messageId)}><span className="far fa-trash-alt"/>Boop to Delete</button>
            </div>
          </div>
        </div>
        <div className="col md-6" style={styleOn}>
          <div className="card text-left bg-dark text-light">
            <h5 className="card-header">Oh look, <i className="far fa-hand-point-left"></i> <em>this guy</em> wants to edit a message</h5>
            <div className="card-body">
              <form onSubmit={e=>{
                e.preventDefault() 
                msgToObjAndMethod(e, "edit", messageId)
              }}>
              <input type="text" className="form-control" id="nameInput" placeholder="Fine, change my name"/>
              <input type="text" className="form-control" id="messageInput" placeholder="My message, too, I don't care"/>
              <button className="btn btn-outline-warning mt-2" type="Submit" onClick={e=>this.toggle()}><span className="fas fa-hammer"/>DO IT</button> 
              </form>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default Message