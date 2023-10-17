import React from 'react'
import './styls/style.css'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { AddToCart } from '../../Redux/cart';

export default function Product({item}) {
    
  let dispatch = useDispatch()

  let handelClick = (item) => {
     let quantity = 1
      let choosedItem = {
        totalQuty : quantity,
        totalPrice : quantity * item.price,
        ...item
      }
      dispatch(AddToCart(choosedItem))
  }


  return (
    <div className='product p-3'>
      <div className="pic d-flex justify-content-center">
        <img className=' w-50' src={item.image01} alt="pic" />
      </div>

      <h5 className='link text-center rock'><Link to={`/foods/${item.id}`} className=' text-decoration-none a'>{item.title}</Link></h5>

      <div className="price-box d-flex justify-content-between align-items-center">

        <p className="price font-red fw-bold">${item.price}</p>

        <button className='back-red text-capitalize' onClick={() => {handelClick(item)}}>add to chart</button>

      </div>
    </div>
  )
}
