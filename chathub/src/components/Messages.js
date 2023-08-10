import React from 'react'
import Message from './Message'


const Messages = () => {
  return (
    <div className='messages bg-gray-500 overflow-scroll overflow-x-hidden h-5/6'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages;