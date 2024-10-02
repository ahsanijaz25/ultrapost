import React from 'react'
import HomeCarosuel from '../../componets/Home-carsoeul/HomeCarosuel'
import HeroUltra from '../../componets/Home/UltraPort/HeroUltra'
import Passion from '../../componets/Home/Passion/Passion'
import Categories from '../../componets/Home/Categories/Categories'
import Advantages from '../../componets/Home/Advantages/Advantages'
import Review from '../../componets/Home/Review/Review'

const Home = () => {
  return (
    <>
        <HomeCarosuel/>
        <HeroUltra/>
        <Passion/>
        <Categories/>
        <Advantages/>
        <Review/>
    </>
  )
}

export default Home