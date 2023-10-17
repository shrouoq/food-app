import React from 'react'
import Categories from '../components/Categories/categories'
import Landing from './../components/LoadingPage/loadong';
import Serve from '../components/Serve/serve';
import Filter from '../components/prodsFilter/filter';
import Tasty from '../components/TestyTreat/tasty';
import PizzaSlider from '../components/pizzaSlider/pizzaSlider';
import Testimoial from '../components/testimonials/Testimoial';

export default function Home() {
  return (
    <div className='home'>
      <Landing />
      <Categories />
      <Serve />
      <Filter/>
      <Tasty />
      <PizzaSlider />
      <Testimoial />
    </div>
  )
}
