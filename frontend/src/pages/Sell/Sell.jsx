import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from '../Sell/Add/Add'
import List from '../Sell/List/List'
import Orders from '../Sell/Orders/Orders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Sell.css'

const Sell = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
        <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path='add' element={<Add url={url}/>}/>
          <Route path='list' element={<List url={url}/>}/>
          <Route path='orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Sell
