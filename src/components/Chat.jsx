import React from 'react'
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Chirag</span>
        <div className='chatIcons'>
          <img src="https://cdn-icons-png.flaticon.com/512/45/45010.png" />
          <img src="" />
          <img src="" />
        </div>
      </div>
      <Messages/>
      <input type="text"></input>
    </div>
  )
}

export default Chat
