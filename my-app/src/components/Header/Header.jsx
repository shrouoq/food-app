import React from 'react'
import { Container } from 'reactstrap';
import './styls/style.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/res-logo.png'
import { useState , useRef , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Item from '../item/Item'
import { Total , TotalItems } from '../../Redux/cart';


const pages = [
  {
    path:'/',
    element:'home'
  },
  {
    path:'/foods',
    element:'foods'
  },
  {
    path:'/cart',
    element:'cart'
  },
  {
    path:'/contact',
    element:'contact'
  }
]

export default function Header() {
    const dispatch = useDispatch()
    const[openMenue , setOpenMenue]=useState(false)
    const[openCart , setOpenCart]=useState(false)
    const {data , totalPrice , totalItems} = useSelector(state => state.cart)
    const Ref = useRef()


    const handelOpen = () => {
     setOpenMenue((oldOne => !oldOne))
    }

    const handelClose = () => {
      setOpenMenue(false)
    }

    const handelOpenCart = () => {
      setOpenCart(true)
    }

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          Ref.current.classList.add("sticky");
        } else {
          Ref.current.classList.remove("sticky");
        }
      });
    }, []);

    useEffect(() => {
        dispatch(Total())
        dispatch(TotalItems())
    }, [data])

 

  return (
    
    <div className="header-container">
      <div className="header" ref={Ref}>
      <Container>
        
        <div className="header-nav d-flex justify-content-between align-items-center">

            <div className="logo d-flex flex-column align-items-center">
                <img src={logo} alt="logo" />
                <h5 className='title fw-bold'>Tasty Treat</h5>
            </div>

            <div className={`nav ${openMenue && 'open'}`} onClick={() => handelClose()}>
              <div className="nav-links d-flex gap-5 justify-content-center align-items-center">
                  {
                    pages.map(ele => 
                      
                      <NavLink key={pages.indexOf(ele)} to={ele.path} className='text-capitalize text-decoration-none link' onClick={() => handelClose()}>{ele.element}</NavLink>

                      )
                  }
              </div>
            </div>

            <div className="nav-icons d-flex gap-3">
                <div className="basket-icon position-relative" onClick={() => handelOpenCart()}>
                    <i class="ri-shopping-basket-fill"></i>
                    <span className='items-num position-absolute rounded-circle text-center'>{totalItems}</span>
                </div>

                <Link to='/signin' className='link text-decoration-none'><i class="ri-user-line"></i></Link>

                <span className='menu' onClick={() => handelOpen()}>
                  <i class="ri-menu-line"></i>
                </span>
            </div>

        </div>
    
      </Container>
      </div>

        
      <div className={`Cart-items d-flex justify-content-end ${openCart?'open' : ''}`}>

          <div className="inner-items position-relative">

            <div className="selected-items">
                <div className="close m-3 mb-4 rounded-circle text-center fs-5" onClick={() => setOpenCart(false)}>
                  <i class="ri-close-fill"></i>
                </div>
                

                {
                  data.length > 0 ? 
                  <div className="items">
                  {
                    data.map(ele => <Item item={ele} />)
                  }
                  </div>
                  :
                  <p className='rock fw-bold text-center text-capitalize'>No item added to the cart</p>
                }
            </div>

            <div className="total position-absolute bottom-0 back-red w-100 d-flex justify-content-between align-items-center p-3">
              <div className="subTotal">
                <p className=' text-capitalize fs-5'>subtotal : <span className=' fw-bold'>${totalPrice}</span></p>
              </div>

              <Link to='/check' className='checkOut text-decoration-none fw-bold' onClick={() => setOpenCart(false)}>check out</Link>
            </div>

          </div>



      </div>

      
      
    </div>


  ) 
  

 
}
