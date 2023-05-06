import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
        

        <NavLink to= "/">    
        <div className='ml-5'>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw0plY95dc2QowfYT3dZyF4s&ust=1680541358508000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDHr8fWi_4CFQAAAAAdAAAAABAE"/>
        </div>       
        </NavLink>

        
        <div className='flex items-center mr-5 space-x-6 font-medium text-slate-100'>
          <NavLink to= "/">
          <p>Home</p>
          </NavLink>
          
          <NavLink to= "/cart">
            <div>
            < FaShoppingCart />                
            </div>
          
          </NavLink>
          
          
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
