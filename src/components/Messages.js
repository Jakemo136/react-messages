import React from 'react';
import Message from './Message'

const Messages = ({messages}) => {
  return(
    <div>
      {messages.map(({name, message, id})=><Message
        key={id}
        messageId={id}
        name={name}
        message={message}
      />)}
    </div>
  )
}

export default Messages