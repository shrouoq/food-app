import React from 'react'
import SubSlider from '../components/subSlider/SubSkider'
import SignIn from '../components/formSignIn/SignIn'

export default function Signin() {
  return (
    <div className='signin-box'>
      <SubSlider titl='signin' />
      <SignIn />
    </div>
  )
}
