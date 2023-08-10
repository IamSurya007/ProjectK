import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex items-center bg-gray-800 justify-between h-12 p-2 text-white'>
        <span className='logo font-bold'>ChatHub</span>
            <div className='user flex gap-3'>
                <img className=' bg-white h-8 w-8 rounded-full object-cover' src='https://tse3.mm.bing.net/th?id=OIP.Zu6xBsKbuN86A11j5DW4XQHaLG&pid=Api&P=0&h=180' alt=''/>
                <span>John</span>
                <button className=' bg-slate-700 text-white text-xs border-none cursor-pointer rounded-md px-2 hover:bg-gray-900'>Logout</button>
            </div>
    </div>
  )
}

export default Navbar