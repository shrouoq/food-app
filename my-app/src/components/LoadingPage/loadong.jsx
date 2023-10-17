import React from 'react'
import './styls/style.css'
import { Container , Row , Col } from 'reactstrap';
import pic from '../../assets/images/hero.png'

export default function Landing() {
  return (
    <div className='loading'>
      <Container>
            <div className="inner">

                <Row>
                    <Col lg='6'>
                        <div className="content box">
                            <p className='rock'>Easy way to make an order</p>
                            <p className='tit rock mt-3 mb-3 fw-bold'><span className='font-red'>HUNGRY?</span>Just wait<br/>food at <span className='font-red'>your door</span></p>
                            <p className='lorem secon-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
                            <div className="btns d-flex gap-3">
                                <button className='order back-red'>Order now <i class="ri-arrow-right-s-line"></i></button>
                                <button className='all-foods'>See all foods</button>
                            </div>

                            <div className="details d-flex gap-lg-4 gap-sm-2 ">
                                <div className="shipping d-flex align-items-center gap-2 box">
                                    <div className="icon back-red d-flex justify-content-center align-items-center rounded-circle"><i class="ri-car-line position-relative"></i></div>
                                    <p className='pt-3'>No shipping charge</p>
                                </div>

                                <div className="ckeck d-flex align-items-center gap-2 box">
                                    <div className="icon back-red d-flex justify-content-center align-items-center rounded-circle"><i class="ri-shield-check-line"></i></div>
                                    <p>100% secure checkout</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="pic">
                            <img src={pic} alt="pic"/>
                        </div>
                    </Col>

                </Row>
            </div>
      </Container>
    </div>
  )
}
