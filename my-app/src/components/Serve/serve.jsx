import React from 'react'
import './styls/style.css'
import { Container , Row , Col } from 'reactstrap';
import pic1 from '../../assets/images/service-01.png'
import pic2 from '../../assets/images/service-02.png'
import pic3 from '../../assets/images/service-03.png'

export default function Serve() {
  return (
    <div className='serve'>
      <Container>
        
          
            <div className="inner text-center">
              <Row>
                <Col>
                  <p className="rock font-red titl">What we serve</p>
                  <p className="serve-h1 rock text-center fw-bolder">Just sit back at home<br/>we will <span className='font-red'>take care</span></p>
                  <p className="lorem secon-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
                </Col>
              </Row>
            </div>

            <div className="features">
            <Row>
                <Col lg='4' md='6'>
                  <div className="box d-flex flex-column justify-content-center align-items-center">

                      <img src={pic1} alt="pic" />
                      <h5 className='rock feach-titl fw-bolder'>Quick Delivery</h5>
                      <p className='text secon-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>

                  </div>
                </Col>

                <Col lg='4' md='6'>
                  <div className="box d-flex flex-column justify-content-center align-items-center">

                      <img src={pic2} alt="pic" />
                      <h5 className='rock feach-titl fw-bolder'>Super Dine In</h5>
                      <p className='text secon-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>

                  </div>
                </Col>

                <Col lg='4' md='6'>
                  <div className="box d-flex flex-column justify-content-center align-items-center">

                      <img src={pic3} alt="pic" />
                      <h5 className='rock feach-titl fw-bolder'>Easy Pick Up</h5>
                      <p className='text secon-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>

                  </div>
                </Col>
            </Row>
            </div>
      </Container>
    </div>
  )
}
