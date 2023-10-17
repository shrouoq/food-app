import React from 'react'
import { Link } from 'react-router-dom';


export default function SignIn() {
  return (
    <div className='sign d-flex align-items-center flex-column pt-5 pb-5'>
      <div className="box d-flex align-items-center flex-column p-4">
        <input type="email" name="" id="" placeholder='email'/>
        <input type="password" name="" id="" placeholder='password' className=' mt-4 mb-4'/>
        <button className='back-red'>login</button>
      </div>
      <Link to='/signup' className=' pt-4 text-decoration-none sign-link'>Don't have an account? Create an account</Link>
    </div>
  )
}
