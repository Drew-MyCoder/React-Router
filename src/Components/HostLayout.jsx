import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const HostLayout = () => {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }


  return (
    <>
    <nav className='host-nav'>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : null}
          end
          to=".">
          Dashboard</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : null}
          to="income">
          Income</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : null}
          to="vans">
          Van </NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : null}
          to="reviews">
          Reviews </NavLink>
    </nav>
    <Outlet />
    </>
  )
}
