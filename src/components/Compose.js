import React from 'react';

const Compose = ({submitMessage, toggleCompose}) => {
  const style = toggleCompose ? {} : {display: 'none'}

  const messageToObj = (e) => {
    e.preventDefault()

    const messageObj = {
      name: e.target.nameInput.value,
      message: e.target.messageInput.value 
    }
    submitMessage(messageObj)
  }

  return(
    <div className="mt-4 border border-dark rounded p-4">
      <form onSubmit={(e)=>{messageToObj(e), toggleCompose("toggleCompose")}}>
        <div className="form-group text-left font-weight-bold h2">
          <label htmlFor="name">What your name!</label>
          <input type="name" className="form-control" id="nameInput" placeholder="Name of you" required/>
          <small id="nameHelp" className="form-text text-muted h6 font-italic">We'll never call you by your real name.</small>
        </div>
        <div className="form-group text-left font-weight-bold h2">
          <label htmlFor="message">What your message!</label>
          <input type="text" className="form-control" id="messageInput" placeholder="Words to sending" required/>
        </div>
        <button type="submit" className="btn btn-dark"><span className="fas fa-people-carry"/>Boop me to send!</button>
      </form>
    </div>
  )
}

export default Compose