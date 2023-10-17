import React from 'react'
import './styls/style.css'
import { Container , Row , Col } from 'reactstrap';
import { useState } from 'react';
import burger from '../../assets/images/hamburger.png'
import pizza from '../../assets/images/pizza.png'
import bread from '../../assets/images/bread.png'
import Product from '../product/Product';
import products from '../../assets/fake-data/products';

export default function Filter() {
  const[prods , setProds] = useState(products)
  const[category , setCategory] = useState('all')

  const handelAll = ()=> {
    setProds(products)
    setCategory('all')
  }

  const handelBurger = ()=> {
    let burger = products.filter(ele => ele.category === 'Burger')
    setProds(burger)
    setCategory('burger')
  }

  const handelPizza = ()=> {
    let pizza = products.filter(ele => ele.category === 'Pizza')
    setProds(pizza)
    setCategory('pizza')
  }

  const handelBread = ()=> {
    let bread = products.filter(ele => ele.category === 'Bread')
    setProds(bread)
    setCategory('bread')
  }

  

  return (
    <div className='filter'>
        <h2 className=' text-center fw-bold mt-5 mb-5 rock'>Popular Foods</h2>
        <div className="btns-container ">

            <Container>

                <Row>
                      <Col>
                        <div className="btns back-red mb-5 d-flex justify-content-center align-items-center gap-md-5" >

                            <button onClick={() => handelAll()} className={`text-capitalize d-flex align-items-center  ${category === 'all' ? 'active' : ''}`} >all</button>
                            <button onClick={() => handelBurger()} className={`text-capitalize d-flex align-items-center ${category ===  'burger'? 'active' : ''}`}><img src={burger} alt="pic"/> burger</button>
                            <button onClick={() => handelPizza()} className={`text-capitalize d-flex align-items-center ${category ===  'pizza'? 'active' : ''}`}><img src={pizza} alt="pizza"/>pizza</button>
                            <button onClick={() => handelBread()} className={`text-capitalize d-flex align-items-center ${category ===  'bread'? 'active' : ''}`}><img src={bread} alt="bread"/> bread</button>

                        </div>
                      </Col>                        
                </Row>

                <Row>
                  
                  {
                    prods.map(prod => 
                      
                        <Col lg='3' md='6'>
                          <Product item={prod}/>
                        </Col>
                      
                    )
                  }
                  
                </Row>
                
            </Container>

        </div>

    </div>
  )
}
