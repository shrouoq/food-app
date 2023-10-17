import React from 'react'
import Slider from "react-slick";
import './styls/style.css'
import pic1 from '../../assets/images/ava-1.jpg'
import pic2 from '../../assets/images/ava-2.jpg'
import pic3 from '../../assets/images/ava-3.jpg'

export default function Sliderr() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings} className='slider'>
          <div>
                <p className='secon-text mb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                atque, quam minus totam maiores laborum! Impedit consectetur illum
                aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                quis dolorem quas!"
                </p>

                <div className="pic-box d-flex align-items-center">
                    <img src={pic1} alt="pic" className=' rounded-circle'/>
                    <h5 className='rock'>Jhon Doe</h5>
                </div>
          </div>

          <div>
                <p className='secon-text mb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                atque, quam minus totam maiores laborum! Impedit consectetur illum
                aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                quis dolorem quas!"
                </p>

                <div className="pic-box d-flex align-items-center rounded-circle">
                    <img src={pic2} alt="pic" className=' rounded-circle'/>
                    <h5 className='rock'>Mitchell Marsh</h5>
                </div>
          </div>

          <div> 
                <p className='secon-text mb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                atque, quam minus totam maiores laborum! Impedit consectetur illum
                aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                quis dolorem quas!"
                </p>

                <div className="pic-box d-flex align-items-center">
                    <img src={pic3} alt="pic" className=' rounded-circle' />
                    <h5 className='rock'>Steven Crock</h5>
                </div>
          </div>
    </Slider>
  )
}
