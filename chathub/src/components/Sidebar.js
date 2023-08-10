import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className=' flex-initial w-1/4 border-r border-gray-700 bg-slate-700'>
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar;