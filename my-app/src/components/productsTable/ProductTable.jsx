import React , { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import './styls/style.css'
import { Container } from 'reactstrap';
import { Total , RemoveItem } from '../../Redux/cart';
import { Link } from 'react-router-dom';


export default function ProductsTable() {
    const {data , totalPrice} = useSelector(state => state.cart)
    let dispatch = useDispatch()
  return (
    <div className='products-table mt-5 mb-5'>
      <Container>
        {
          data.length ? 
          <table>
          <tr>
              <th className='rock p-2'>Image</th>
              <th className='rock p-2'>Product Title</th>
              <th className='rock p-2'>Price</th>
              <th className='rock p-2'>Quantity</th>
              <th className='rock p-2'>Delete</th>
          </tr>

          {
              data.map(item => 
                  <tr key={item.id}>
                      <td><img src={item.image01} alt="pic" /></td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.totalQuty}</td>
                      <td><span onClick={() => dispatch(RemoveItem(item))}><i class="ri-delete-bin-5-fill"></i></span></td>
                  </tr>
              )
          }


          </table> : ''
        }

        <div className="totalPrice-details mt-5">
            <h5 className='rock text-capitalize'>subtotal : $<span className='font-red'>{totalPrice}</span></h5>
            <p className=' mt-2 mb-2'>Taxes and shipping will calculate at checkout</p>
            <div className="btns d-flex gap-3">
              <button className='back-red'><Link className=' text-decoration-none btn-link' to='/foods'>continue shopping</Link></button>
              <button className='back-red'><Link className=' text-decoration-none btn-link' to='/check'>proceed to checkout</Link></button>
            </div>
        </div>

      </Container>
    </div>
  )
}
