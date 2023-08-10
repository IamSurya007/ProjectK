import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar';
const Home = () => {
  return (
    <div className=' bg-blue-300 h-screen flex items-center justify-center'>
        <div className=' border-solid border-2 border-white rounded-lg w-screen h-screen flex overflow-hidden'>
          <Sidebar/>
          <Chat/>
        </div>
    </div>
  )
}

export default Home