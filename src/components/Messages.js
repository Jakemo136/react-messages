import React from 'react';
import Message from './Message'

const Messages = ({messages, deleteMessage, makeMsgObj}) => {
  return(
    <div>
      {messages.map(({name, message, id})=><Message
        key={id}
        messageId={id}
        name={name}
        message={message}
        deleteMessage={deleteMessage}
        makeMsgObj={makeMsgObj}
      />)}
    </div>
  )
}

export default Messages