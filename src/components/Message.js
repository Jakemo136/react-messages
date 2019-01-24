import React from 'react';

const Message = ({messageId, name, message}) => {
  return(
    <div>
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button className="btn btn-secondary"><span className="far fa-edit"/>Boop to Edit</button>
          <button className="btn btn-danger"><span className="far fa-trash-alt"/>Boop to Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Message