import React from 'react'
import {  Outlet } from 'react-router-dom'
import Header from '../../componets/Header/Header'
import Footer from '../../componets/Footer/Footer'


const PublicLayout = () => {
 
  
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default PublicLayout