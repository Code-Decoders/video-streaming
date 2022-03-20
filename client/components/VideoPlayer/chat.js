import React from 'react'

const Chat = ({ chat, from }) => {
    return(
        <div>
            {from}
            {chat}
        </div>
    )
}

export default Chat
