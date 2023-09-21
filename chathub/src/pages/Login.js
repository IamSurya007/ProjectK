import React from 'react'
import './styles.css'
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate =useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className=' bg-blue-300 h-screen flex items-center justify-center align-middle'>
        <div className=' bg-white py-5 px-16 rounded-lg items-center flex flex-col gap-2'>
            <span className=' font-bold text-lg'>ChatHub</span>
            <span className=''>Login</span>
            <form onSubmit={handleSubmit} className=' flex flex-col gap-4 border-solid'>
                <input type='eamil' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button className=' bg-blue-500 p-3 rounded-sm text-white font-bold' >Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p className=''>You don't have an account?<Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login;