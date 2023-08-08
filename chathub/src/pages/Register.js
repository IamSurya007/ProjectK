import React from 'react'
import './styles.css'
import addImg from '../img/addImg.png'

const Register = () => {
  return (
    <div className=' bg-blue-300 h-screen flex items-center justify-center align-middle'>
        <div className=' bg-white py-5 px-16 rounded-lg items-center flex flex-col gap-2'>
            <span className=' font-bold text-lg'>ChatHub</span>
            <span className=' font-semibold'>Register</span>
            <form className=' flex flex-col gap-6 border-solid'>
                <input type='text'className=' placeholder-grey-200 ' placeholder='display name'/>
                <input type='eamil'className=' placeholder-grey-200 ' placeholder='email'/>
                <input type='password'className=' placeholder-grey-200 ' placeholder='password'/>
                <input type='file'className=' placeholder-grey-200 ' style={{display: 'none'}} id='file'/>
                <label className=' flex items-center' htmlFor='file'>
                    <img className=' w-8' src={addImg} alt='add' />
                    <span>Add an avatar</span>
                </label>
                <button className=' bg-blue-500 p-3 rounded-md text-white font-bold'>Sign Up</button>
            </form>
            <p className=''>You do have an account? Login</p>
        </div> 
    </div>
  )
}

export default Register;