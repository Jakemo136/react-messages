import React from 'react';

const Compose = ({toggle, toggleCompose, msgToObjAndMethod}) => {
  const style = toggleCompose ? {} : {display: 'none'}

  return(
    <div className="mt-4 border border-dark rounded p-4" style={style}>
      <form onSubmit={(e)=>{
          e.preventDefault() 
          msgToObjAndMethod(e, "submit") 
          toggle("toggleCompose")}}>
        <div className="form-group text-left font-weight-bold h2">
          <label htmlFor="name">What your name!</label>
          <input type="text" className="form-control" id="nameInput" placeholder="Name of you" required/>
          <small id="nameHelp" className="form-text text-muted h6 font-italic">We'll never call you by your real name.</small>
        </div>
        <div className="form-group text-left font-weight-bold h2">
          <label htmlFor="message">What your message!</label>
          <input type="text" className="form-control" id="messageInput" placeholder="Words to sending" required/>
        </div>
        <button type="submit" className="btn btn-dark"><span className="fas fa-people-carry"/>Boop me to send!</button>
        <small className="form-text text-muted h6 font-italic">Newest messages on the bottom, yo</small>
      </form>
    </div>
  )
}

export default Compose