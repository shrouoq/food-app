import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from './../pages/Home';
import CheckCart from '../components/checkCart/CheckCart';
import Foods from '../pages/Foods';
import Cart from '../pages/Cart';
import ShowItem from '../pages/showItem';
import Signin from '../pages/signin';
import Signup from './../pages/signUp';

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check' element = {<CheckCart />} />
        <Route path='/foods' element={<Foods/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/foods/:id' element={<ShowItem/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}
