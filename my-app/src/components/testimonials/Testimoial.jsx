import React from 'react'
import './styles/style.css'
import { Container , Row , Col } from 'reactstrap';
import Sliderr from '../SlickSlider/Slider';
import pic from '../../assets/images/network.png'


export default function Testimoial() {
  return (
    <div className='testmonial'>
      <Container>
        <Row>
            <Col lg='6'>
                <div className="data d-flex flex-column justify-content-center">
                    <h5 className='rock font-red'>Testimonial</h5>
                    <h2 className="rock fw-bold mt-3 mb-3">What our <span className='font-red'>customers</span> are saying</h2>
                    <p className='secon-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
                    <Sliderr />
                </div>
            </Col>

            <Col lg='6'>
                <div className="pic d-flex justify-content-center align-items-center">
                    <img src={pic} alt="pic" className=' w-100' />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
