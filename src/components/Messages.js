import React from 'react';
import Message from './Message'

const Messages = ({messages, editMessage, deleteMessage}) => {
  return(
    <div>
      {messages.map(({name, message, id})=><Message
        key={id}
        messageId={id}
        name={name}
        message={message}
        editMessage={editMessage}
        deleteMessage={deleteMessage}
      />)}
    </div>
  )
}

export default Messages