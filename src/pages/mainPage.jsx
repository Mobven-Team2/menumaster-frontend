import React from 'react'
import Header from '../components/Header/header'
import Intro from '../components/Intro/Intro'
import './mainpage.scss'
import Services from '../components/Services/Services'
import Team from '../components/Team/team'
import Download from '../components/Download/download'
import Questions from '../components/Questions/questions'
import Communication from '../components/Communication/communication'
import HowToUse from '../components/HowToUse/HowToUse'
import UserExperience from '../components/UserExperience/UserExperience'

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <hr />
      <HowToUse/>
      <UserExperience/>
      <Team/>
      <hr />
      <Services/>
      <Download/>
      <Questions/>
      <Communication/>
     
    </div>
  )
}

export default MainPage;
