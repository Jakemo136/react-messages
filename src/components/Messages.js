import React from 'react';
import Message from './Message'

const Messages = ({messages, editMessage, msgToObjAndMethod}) => {
  return(
    <div>
      {messages.map(({name, message, id})=><Message
        key={id}
        messageId={id}
        name={name}
        message={message}
        editMessage={editMessage}
        msgToObjAndMethod={msgToObjAndMethod}
      />)}
    </div>
  )
}

export default Messages