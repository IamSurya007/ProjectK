import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import '../pages/styles.css'
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';


const Messages = () => {

  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db , "chats",data.chatId),(doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })

    return ()=>{
      unsub()
    }
  },[data.chatId])

  return (
    <div className='messages bg-gray-500 overflow-scroll overflow-x-hidden h-5/6 md:h-5/6'>
      {messages.map((m)=>(
        <Message messages={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages;