import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
const Layout = ({children}) => {
  return (
    <div className={'w-full xl:w-[80%] m-auto h-auto px-7 sm:px-12 md:px-20'}>
      <nav className="my-3 bg-black/5 text-black rounded-md">
        <div className="container mx-auto flex items-center justify-between px-10 py-1">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" width={60}/>
            <h1 className={'font-bold text-2xl text-black'}>Quizzle</h1>
          </div>

          <div className="space-x-4 text-black/60">
            <Link to="/login" className="">Login</Link>
            <Link to="/register" className="">SignUp</Link>
          </div>
        </div>
      </nav>
        {children}
    </div>
  )
}

export default Layout