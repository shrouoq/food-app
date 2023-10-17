import React , { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './styls/style.css'
import { Container  , Row , Col} from 'reactstrap'
import SubSlider from '../subSlider/SubSkider'
import {Total} from '../../Redux/cart'


export default function CheckCart() {
    const {totalPrice , data} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Total)
    },[data])

  return (
    <div className='check-cart'>
       <SubSlider titl='checkout' />
       <div className='cheack pt-5 pb-5'>
            <Container>
                    <Row>
                        <Col lg='8' md='6'>
                            <div className="form">
                                <h5 className=' rock mb-4'>Shipping Address</h5>
                                <form action="" className=' d-flex flex-column'>
                                    <input type="text" name="" id="text" placeholder='enter your name'/>
                                    <input type="email" name="" id="mail" placeholder='enter your email'/>
                                    <input type="number" name="" id="" placeholder='phone number' />
                                    <input type="text" name="" id="country" placeholder='country'/>
                                    <input type="text" name="" id="city" placeholder='city'/>
                                    <input type="number" name="" id="code" placeholder='postal code'/>
                                    <button type="submit" className='back-red p-2 w-25 fw-bold'>payment</button>
                                </form>
                            </div> 
                        </Col>    

                        <Col lg='4' md='6'>
                            <div className="total p-3  mt-5 mt-lg-0">
                                <div className="inner">
                                    <div className="subTotal d-flex justify-content-between align-items-center mb-4">
                                        <p className=' fw-bold rock text-capitalize'>subtotal : </p>
                                        <p className="mum fw-bold">${totalPrice}</p>
                                    </div>

                                    <div className="shipping d-flex justify-content-between align-items-center mb-4">
                                        <p className=' fw-bold rock text-capitalize'>shipping : </p>
                                        <p className="num fw-bold">$10</p>
                                    </div>
                                </div>

                                <div className='totalMoney d-flex justify-content-between align-items-center mt-5'>
                                    <p className=' fw-bold rock text-capitalize'>total : </p>
                                    <p className="num fw-bold">${totalPrice + 10}</p>
                                </div>
                            </div>
                        </Col>         
                    </Row>
            </Container>
        </div>

       </div>
   
  )
}
