import { useState } from 'react';
import logo from '../assets/logo.svg'
import search  from '../assets/search.svg'
import upArrow  from '../assets/upArrow.svg'
import Login from "./Login";
const Navbar = () => {
    const [loginPop,setLoginPop]=useState()
  return (
    <>
    <div className='flex p-4 '>
      <img src={logo} alt="" className="w-11 h-9"/>
      <div className='flex border border-spacing-1 w-64 p-2 border-black'>
        <img src={search} alt="" className="w-6 h-5 mt-1" />
        <input placeholder='Location' className='ml-3'/>
        <img src={upArrow} alt="" className='w-8 h-7' />
      </div>
      <div className='flex border border-black h-12 ml-4'>
        <input placeholder='Find Cars, Mobile phones and more' className='ml-3 w-96' type="text" name="" id="" />
      <img src={search} alt="" className="" />
      </div>
      <div className='flex h-12 p-3 ml-6 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={upArrow} className='w-8 h-7' alt="" />
      </div>
      <div  onClick={()=>{setLoginPop(!loginPop)}} className='flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline'>
        <h1 className='font-bold text-lg'>Login</h1>
      </div>
      <div className='w-28 flex h-12 p-2 ml-10 cursor-pointer rounded-full border border-yellow-500'>
        <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
      </div>
    </div>
    {loginPop && <Login/>}
    

    </>
    
    
  )
}

export default Navbar
