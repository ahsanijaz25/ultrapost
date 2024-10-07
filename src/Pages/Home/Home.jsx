import React from 'react'
import HomeCarosuel from '../../componets/Home-carsoeul/HomeCarosuel'
import HeroUltra from '../../componets/Home/UltraPort/HeroUltra'
import Passion from '../../componets/Home/Passion/Passion'
import Categories from '../../componets/Home/Categories/Categories'
import Advantages from '../../componets/Home/Advantages/Advantages'
import Review from '../../componets/Home/Review/Review'
// import PcProductCarsouel from '../../componets/Home/PcProductCarsouel/PcProductCarsouel';
// import HomeProdcutCarsouel from '../../componets/Home/Home-Product-Carsouel/HomeProdcutCarsouel';
import Influencers from '../../componets/Home/Influencers/Influencers';

const Home = () => {
  return (
    <>
        <HomeCarosuel/>
        <HeroUltra/>
        {/* <PcProductCarsouel/> */}
        {/* <HomeProdcutCarsouel /> */}
        <Passion/>
        <Categories/>
        <Influencers />
        <Advantages/>
        <Review/>
    </>
  )
}

export default Home