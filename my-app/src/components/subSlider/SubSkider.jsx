import React from 'react'
import './styls/style.css'
import {Container} from 'reactstrap';
import banner from '../../assets/images/banner-02.jpg'

export default function SubSlider({titl}) {
  return (
    <div className='subSlider position-relative'>
      <div className="pic">
        <img src={banner} alt="pic" />
        <Container><h2 className='rock position-absolute text-capitalize fw-bold'>{titl}</h2></Container>
      </div>
    </div>
  )
}
