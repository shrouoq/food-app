import React from 'react'
import SubSlider from '../components/subSlider/SubSkider'
import AllFoods from '../components/AllFoods/AllFoods'

export default function Foods() {
  return (
    <div className='foods'>
      <SubSlider titl='all foods' />
      <AllFoods />
    </div>
  )
}
