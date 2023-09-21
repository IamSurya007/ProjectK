import React, { useContext } from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineVideoCamera} from 'react-icons/ai'
import {AiOutlineMore} from 'react-icons/ai'
import Messages from './Messages'
import Input from './Input'
import '../pages/styles.css'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className=' flex-initial sm:w-3/4 responsive-full'>
      <div className='chatInfo bg-gray-900 text-white flex h-16 pl-5 items-center justify-between'>        
        <span>{data.user?.displayName}</span>
        <div className='chatIcons flex gap-3 pr-5'>
          <AiOutlineVideoCamera className=' text-2xl'/>
          <AiOutlineUserAdd className=' text-2xl'/>
          <AiOutlineMore className=' text-2xl'/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat