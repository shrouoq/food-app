import React , { useState } from 'react'
import './styls/style.css'
import SubSlider from './../subSlider/SubSkider';
import {useParams} from 'react-router-dom'
import { Container , Row , Col } from 'reactstrap';
import Category from '../category/Category';
import products from './../../assets/fake-data/products';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../Redux/cart';

export default function ItemSlider() {
    let dispatch = useDispatch()
    let {id} = useParams()
    let product = products.find(ele => ele.id === id)
    let category = product.category

    const [src , setSrc] = useState(product.image01)
    const [show , setShow] = useState(true)


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
    <div className='itemsSlider-container'>
      <SubSlider titl={product.title} />

      <Container>
        
            <div className='slider-box'>

                <div className="pics-slider">
                    <Row>
                        <Col lg='6'>
                            <div className="slider d-flex gap-5 align-items-center">
                                <div className="box small ">
                                    <div className="pic p-1" onClick={() => setSrc(product.image01)}>
                                        <img src={product.image01} alt="pic" />
                                    </div>

                                    <div className="pic p-1" onClick={() => setSrc(product.image02)}>
                                        <img src={product.image02} alt="pic" />
                                    </div>

                                    <div className="pic p-1" onClick={() => setSrc(product.image03)}>
                                        <img src={product.image03} alt="pic" />
                                    </div>
                                </div>

                                <div className="box big p-3">
                                    <img src={src} alt="pic" />
                                </div>
                            </div>
                        </Col>

                        <Col lg='6'>
                            <div className="data">
                                <h2 className='rock fw-bold'>{product.title}</h2>
                                <p className='price mt-3 mb-3 font-red fs-4'>price : <span className=' fw-bold fs-3'>${product.price}</span></p>
                                <p className='category mb-5 text-capitalize fw-bold'>category : <span>{product.category}</span></p>
                                <button className='back-red text-capitalize' onClick={() => handelClick(product)}>add to cart</button>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="review mt-5">

                    <div className="btns d-flex gap-5 pb-4">
                        <button className={`text-capitalize ${show?'active':''} rock`} onClick={() => setShow(true)}>description</button>
                        <button className={`text-capitalize ${!show?'active':''} rock`}  onClick={() => setShow(false)}>review</button>
                    </div>

                    <div className="details">

                        {
                            show ? 
                                <p className='description mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.</p>
                                :
                                <div className="reviews mt-4">
                                    <div className="reviews-box">
                                        <div className="box">
                                            <h6 className='fw-bold'>Jhon Doe</h6>
                                            <p className="mail mt-2 mb-2">jhon1@gmail.com</p>
                                            <p className="comment text-capitalize">comment : <span>great product</span></p>
                                        </div>
                                    </div>

                                    <div className="form d-flex justify-content-center">
                                        <div className="box d-flex flex-column mt-5 w-75">
                                            <input type="text" name="" id="name"  placeholder='enter your name'/>
                                            <input type='email' name="" id="name"  placeholder='enter your email'/>
                                            <textarea name="" id="" cols="30" rows="10" placeholder='write your review'></textarea>
                                            <button type='submit' className='back-red mt-2'>submit</button>
                                        </div>
                                    </div>
                                </div>
                        }

                    </div>

                </div>

            </div>
        
      </Container>

      <Category category={category} />
    </div>
  )
}
