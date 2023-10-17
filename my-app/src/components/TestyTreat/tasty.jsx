import React from 'react'
import './styls/style.css'
import { Container , Row , Col } from 'reactstrap';
import pic from '../../assets/images/location.png'

export default function Tasty() {
  return (
    <div className='tasty'>
      <Container>
        <Row>
            <Col lg='6'>
                <div className="testy-pic h-100 d-flex justify-content-center align-items-center">
                  <img className='w-100' src={pic} alt="location" />
                </div>
            </Col>


            <Col lg='6'>
              <div className="data h-100 d-flex justify-content-center flex-column">

                  <h2 className="rock"><span className='font-red'>Why</span> Tasty Treat?</h2>
                  <p className=' mt-3 mb-5 secon-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
                  
                  <div className="features">

                    <div className="box mb-4">
                      <h5 className=' d-flex align-items-center'><i class="ri-checkbox-circle-line font-red"></i>Fresh and tasty foods</h5>
                      <p className='secon-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                    </div>

                    <div className="box mb-4">
                      <h5 className=' d-flex align-items-center'><i class="ri-checkbox-circle-line font-red"></i>Quality support</h5>
                      <p className='secon-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                    </div>       

                    <div className="box">
                      <h5 className='d-flex align-items-center'><i class="ri-checkbox-circle-line font-red"></i>Order from any location</h5>
                      <p className='secon-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                    </div> 

                  </div>

              </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
