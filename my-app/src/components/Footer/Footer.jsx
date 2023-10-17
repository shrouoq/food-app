import React from 'react'
import './styls/style.css'
import { Container , Row , Col } from 'reactstrap';
import pic from '../../assets/images/res-logo.png'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <Container>
        <div className="inner">

            <Row>


                <Col lg='3' md='6' className='mb-3'>
                    <div className="footer-box">

                        <div className="logo">
                          <img src={pic} alt="pic"/>
                          <h5 className='rock fw-bold pt-1'>Tasty Treat</h5>
                        </div>

                        <p className='lorem pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus</p>
                    </div>
                </Col>

                <Col lg='3' md='6' className='mb-3'>
                    <div className="footer-box">
                        <h4 className='rock pb-3 fw-bold'>Delivery Time</h4>

                        <div className="daysOn">
                          <p className="days fw-bold">Sunday - Thursday</p>
                          <p className="time">10:00am - 11:00pm</p>
                        </div>

                        <div className="daysOff">
                          <p className="days fw-bold">Friday - Saturday</p>
                          <p className="time">Off day</p>
                        </div>
                    </div>
                </Col>

                <Col lg='3' md='6' className='mb-3'>
                  <div className="footer-box">
                      <h4 className='rock fw-bold pb-3'>Contact</h4>
                      <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
                      <p className=' fw-bold'>Phone: 01712345678</p>
                      <p className=' fw-bold'>Email: example@gmail.com</p>
                  </div>
                </Col>

                <Col lg='3' md='6' className='mb-3'>
                  <div className="footer-box">
                      <h4 className='rock pb-3 fw-bold'>Newsletter</h4>
                      <p>Subscribe our newsletter</p>
                      <div className="form d-flex overflow-hidden">
                      <input type="email" name="" placeholder='your e-mail'/>
                      <button className='d-flex justify-content-center align-items-center flex-fill '><i class="ri-send-plane-fill"></i></button>
                      </div>
                  </div> 
                </Col> 


            </Row>

        </div>

        <div className="copy">

          <Row>

              <Col lg='6'>
              
                  <div className="copy-box text-capitalize">
                    <p>Copyright - 2022, website made by <span className='fw-bold'>shrouoq ahmed</span>. All Rights Reserved.</p>
                  </div>
              
              </Col>

              <Col lg='6'>
                <div className="contact-icons d-flex justify-content-lg-end justify-content-center  gap-4 text-capitalize">
                    follow : 
                    <div className="icons d-flex gap-4">
                      <i class="ri-facebook-fill text-center rounded-circle"></i>
                      <i class="ri-github-line text-center rounded-circle"></i>
                      <i class="ri-youtube-line text-center rounded-circle"></i>
                      <i class="ri-linkedin-line text-center rounded-circle"></i>
                    </div>
                </div>
              </Col>

          </Row>

        </div>
      </Container>
    </div>
  )
}
