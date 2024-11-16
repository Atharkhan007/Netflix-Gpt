import React from 'react'
import Header from './Header'
import { BG_IMG } from '../Utils/constants'
import { useState } from 'react'

const Login = () => {

  const [isSignInForm , setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />

      <div className='absolute'>
      <img className='' src={BG_IMG}
      alt='netflix-browse-img' />
      </div>
      <form className='absolute w-3/12 my-36 mx-auto p-12 bg-black right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='bg-slate-800 p-4 my-4 w-full ' />}
        <input type="text" placeholder='User Email' className='bg-slate-800 p-4 my-4 w-full ' />
        <input type="password" placeholder='Password' className='bg-slate-800 p-4 my-4 w-full' />
        <button className='py-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign In Now" }</p>
      </form>
    </div>
  )
}

export default Login