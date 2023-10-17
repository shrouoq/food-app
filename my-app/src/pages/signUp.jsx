import React from 'react'
import SubSlider from '../components/subSlider/SubSkider'
import SignUp from '../components/formSignUp/SignUp'

export default function Signup() {
  return (
    <div className='signup-box'>
      <SubSlider titl='signup' />
      <SignUp />
    </div>
  )
}
