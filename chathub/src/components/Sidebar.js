import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import '../pages/styles.css'
const Sidebar = () => {
  return (
    <div className=' responsive-sidebar flex-initial sm:w-1/4 border-r border-gray-700 bg-slate-700'>
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar;