import React from 'react'
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div className='sign d-flex align-items-center flex-column pt-5 pb-5'>
      <div className="box d-flex align-items-center flex-column p-4">
        <input type="text" name="" id="" placeholder='name' className='mb-4'/>
        <input type="email" name="" id="" placeholder='email'/>
        <input type="password" name="" id="" placeholder='password' className=' mt-4 mb-4'/>
        <button className='back-red'>sign up</button>
      </div>
      <Link to='/signin' className=' pt-4 text-decoration-none sign-link'>Already have an account? Login</Link>
    </div>
  )
}
