import React, { useState } from 'react'
import Header from './Header';

const Herosection = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <div className='h-screen'>
     <Header/> 
     
     <div className="space-x-4 absolute w-1140 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <h1 className='text-5xl pb-8 block overflow-hidden whitespace-nowrap  typing-animation'>Get Who Gets You<br/>Dating For Every Single</h1>
                <button onClick={() => setShowLogin(!showLogin)} className="inline-block px-8 py-3 text-center text-black font-light rounded-full transition duration-200 border border-black hover:bg-orange-300 hover:border-orange-300 hover:text-white inline-block px-8 py-3 text-center text-white font-light rounded-full transition duration-200 bg-red-500 border border-red-500 hover:bg-red-700">
                
                  Login
                  
                  </button>
                <a href="#feature" className="inline-block px-8 py-3 text-center text-red-500 font-light rounded-full transition duration-200 border border-red-500 hover:bg-red-500 hover:text-white">
                
                  Create Account
                  
                  </a>

            </div>
    </div>
  )
}

export default Herosection
