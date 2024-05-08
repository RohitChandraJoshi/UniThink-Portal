import React from 'react'
import BookNow from '../components/BookNow'
import Categories from '../components/Categories'
import AboutUs from '../components/AboutUs'
import Intro from '../components/Intro'
import PopularCountriesImages from '../components/PopularCountriesImages'
import Articles from '../components/Articles'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  return (
    <div className='overflow-x-hidden'>
        <ToastContainer/>
        <BookNow/>
        <Intro/>
        <Categories/>
        <AboutUs/>
        <PopularCountriesImages/>
        <Articles/>
    </div>
  )
}

export default Home