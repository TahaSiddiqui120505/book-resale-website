import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Sell from './pages/Sell/Sell'
import Buy from './pages/Buy/Buy'
import Login from './components/Login/Login'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}></Login>:<></>}
      <div className='app'>
      <Navbar setShowLogin = {setShowLogin}></Navbar>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Buy/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      </div>
    </>
  )
}

export default App
