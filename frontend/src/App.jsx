import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Sell from './pages/Sell/Sell'
import Buy from './pages/Buy/Buy'

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Buy/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
