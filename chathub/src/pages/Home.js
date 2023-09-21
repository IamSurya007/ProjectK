import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar';
import './styles.css'
const Home = () => {
  return (
    <div className=' bg-gray-500 h-screen flex items-center justify-center'>
        <div className=' border-solid border-2 border-white w-screen h-screen flex overflow-hidden md:flex-row'>
          <Sidebar />
          <Chat />
        </div>
    </div>
  )
}

export default Home