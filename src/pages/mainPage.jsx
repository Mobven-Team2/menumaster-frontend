import React from 'react'
import Header from '../components/Header/header'
import Intro from '../components/Intro/intro'
import './mainpage.scss'
import Services from '../components/Services/services'
import Team from '../components/Team/team'
import Download from '../components/Download/download'
import Questions from '../components/Questions/questions'
import Communication from '../components/Communication/communication'

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Team/>
      <Services/>
      <Download/>
      <Questions/>
      <Communication/>
     
    </div>
  )
}

export default MainPage;
