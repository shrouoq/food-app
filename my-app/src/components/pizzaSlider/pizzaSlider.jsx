import React, { useState , useEffect } from 'react'
import products from './../../assets/fake-data/products';
import { Container , Row , Col } from 'reactstrap';
import Product from './../product/Product';

export default function PizzaSlider() {

  const [pizza , setPizza] = useState([])

  const handelPizza = () => {
    let pizza = products.filter(ele => ele.category === 'Pizza')
    setPizza(pizza)
  }

  useEffect(()=>{
      handelPizza()
  },[products])

  return (
    <div className='pizza'>
      <h2 className='rock text-center fw-bold text-capitalize mb-5'>hot pizza</h2>
      <Container>
        <Row>
          {
            pizza.slice(0,4).map( ele => <Col lg='3' md='6'><Product item={ele} key={ele}/></Col>)
          }
        </Row>
      </Container>
    </div>
  )
}
