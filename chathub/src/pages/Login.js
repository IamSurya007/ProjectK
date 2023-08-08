import React from 'react'
import './styles.css'

const Login = () => {
  return (
    <div className=' bg-blue-300 h-screen flex items-center justify-center align-middle'>
        <div className=' bg-white py-5 px-16 rounded-lg items-center flex flex-col gap-2'>
            <span className=' font-bold text-lg'>ChatHub</span>
            <span className=''>Login</span>
            <form className=' flex flex-col gap-4 border-solid'>
                <input type='eamil' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button className=' bg-blue-500 p-3 rounded-sm text-white font-bold'>Sign Up</button>
            </form>
            <p className=''>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login