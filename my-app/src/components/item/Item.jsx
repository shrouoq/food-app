import React from 'react'
import { useDispatch } from 'react-redux'
import './styls/style.css'
import { RemoveItem , HandeToggle} from '../../Redux/cart'

export default function Item({item}) {
  const dispatch = useDispatch()

  const handelRemove = (e) => {
    dispatch(RemoveItem(e))
  }
  return (
    <div className='cart-item d-flex justify-content-between align-items-center mb-4'>

        <div className="cart-data d-flex">
          <div className="pic">
            <img src={item.image01} alt="pic" />
          </div>

          <div className="data">
              <h6 className='rock fw-bold'>{item.title}</h6>

              <div className="price d-flex align-items-center gap-5 mt-3 mb-3">
                <p className="totalNum">x{item.totalQuty}</p>
                <p className='totalPrice font-red fw-bold'>${item.totalPrice}</p>
              </div>

              <div className="quantity d-flex justify-content-between align-items-center">
                <button onClick={() => dispatch(HandeToggle({id:item.id , type:'DEC'}))}><i class="ri-subtract-fill"></i></button>
                <p>{item.totalQuty}</p>
                <button onClick={() => dispatch(HandeToggle({id:item.id , type:'INC'}))}><i class="ri-add-fill"></i></button>
              </div>
          </div>
        </div>

        <div className="icon-close fw-bold fs-5" onClick={() => handelRemove(item)}>
          <i class="ri-close-fill"></i>
        </div>
      
    </div>
  )
}
