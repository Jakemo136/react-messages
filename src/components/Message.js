import React from 'react';

const Message = ({messageId, name, message}) => {
  return(
    <div>
      <div>{messageId}</div>
      <div>{name}</div>
      <div>{message}</div>
    </div>
  )
}

export default Message