import React from 'react'
import Header from '../components/Header/header'
import Intro from '../components/Intro/Intro'
import './mainpage.scss'
import Services from '../components/Services/Services'

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Services/>
    </div>
  )
}

export default MainPage
