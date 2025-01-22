import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayOut = () => {
  return (
    <div>
        <header>
            <nav className='bg-indigo-900 p-6 shadow-lg'>
                <ul className='grid grid-cols-5 text-center'>
                    <li className='text-white text-xl'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='text-white text-xl'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='text-white text-xl'>
                        <NavLink to='/help'>Help</NavLink>
                    </li>
                    <li className='text-white text-xl'>
                        <NavLink to='/api'>Api</NavLink> 
                    </li>
                    <li className='text-white text-xl'>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayOut;