import React from 'react'
import Header from '../components/Header/Header'
import Footer from './../components/Footer/Footer';
import Routing from '../Routs/Routs';


export default function LayOut() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  )
}
