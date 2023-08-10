import React from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineVideoCamera} from 'react-icons/ai'
import {AiOutlineMore} from 'react-icons/ai'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className=' flex-initial w-3/4'>
      <div className='chatInfo bg-gray-950 text-white flex h-16 pl-5 items-center justify-between'>        
        <span>Jane</span>
        <div className='chatIcons flex gap-3 pr-5'>
          <AiOutlineVideoCamera/>
          <AiOutlineUserAdd/>
          <AiOutlineMore/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat