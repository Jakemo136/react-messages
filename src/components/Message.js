import React, { Component } from 'react';

class Message extends Component  {
  state = {
    toggleEdit: false
  }
  
  
  render () {
    const {messageId, name, message} = this.props
    return(
      <div className="row">
        <div className="col md-6">
          <div className="card text-left">
            <h5 className="card-header">Mysterious Secret Message</h5>
            <div className="card-body">
              <h6 className="card-title font-italic font-weight-bold">{name}</h6>
              <p className="card-text">{message}</p>
              <button className="btn btn-secondary"><span className="far fa-edit"/>Boop to Edit</button>
              <button className="btn btn-danger"><span className="far fa-trash-alt"/>Boop to Delete</button>
            </div>
          </div>
        </div>
        <div className="col md-6">
        
        </div>
      </div>
    )
  }
}

export default Message