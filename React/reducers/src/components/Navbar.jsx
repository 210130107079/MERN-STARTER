import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex'>
        <div className='justify-between'>
            <NavLink className='mr-5 bg-purple-400/50 px-3 py-2 rounded-md' to='/increment_age'>Age</NavLink>
            <NavLink className='mr-5 bg-purple-400/50 px-3 py-2 rounded-md' to='/name_age'>Name-Age</NavLink>
            <NavLink className='mr-5 bg-purple-400/50 px-3 py-2 rounded-md' to='/todo'>Todo</NavLink>
            <NavLink className='mr-5 bg-purple-400/50 px-3 py-2 rounded-md' to='/array'>Array</NavLink>
        </div>
    </div>
  )
}

export default Navbar