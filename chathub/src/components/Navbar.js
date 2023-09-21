import { signOut } from 'firebase/auth'
import React, {useContext} from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar flex items-center bg-gray-800 justify-between h-16 p-2 text-white'>
        <span className='logo font-bold'>ChatHub</span>
            <div className='user flex gap-3'>
                <img className=' bg-white h-8 w-8 rounded-full object-cover' src={currentUser.photoURL} alt=''/>
                <span>{currentUser.displayName}</span>
                <button className=' bg-slate-700 text-white text-xs border-none cursor-pointer rounded-md px-2 hover:bg-gray-900' onClick={()=>signOut(auth)}>Logout</button>
            </div>
    </div>
  )
}

export default Navbar