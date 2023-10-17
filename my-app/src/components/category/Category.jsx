import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import products from '../../assets/fake-data/products'
import Product from './../product/Product';

export default function Category({category}) {
    let NewProducts = products.filter(item => item.category === category)
  return (
    <div className='category-container'>
      <Container>
        <h3 className='rock fw-bold mb-5' style={{color:'#212245'}}>You might also like</h3>
        <Row>
            {
                NewProducts.map(item => 
                    <Col lg='3'  md='6'>
                        <Product item={item} />
                    </Col>
                )
            }
        </Row>
      </Container>
    </div>
  )
}
