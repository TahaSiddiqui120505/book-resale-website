import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/sell/add' className="sidebar-option">
                <img className='addd' src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/sell/list' className="sidebar-option">
                <img className='listt' src={assets.order_icon} alt="" />
                <p>List Items</p>
                </NavLink>
            <NavLink to='/sell/orders' className="sidebar-option">
                <img className='orderr' src={assets.order_icon} alt="" />
                <p>Orders</p>
                </NavLink>
        </div>
    </div>
  )
}

export default Sidebar