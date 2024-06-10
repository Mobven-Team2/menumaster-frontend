import React from 'react';
import Header from '../components/Header/header';
import Intro from '../components/Intro/Intro';
import './mainpage.scss';
import Services from '../components/Services/Services';
import Team from '../components/Team/team';
import Questions from '../components/Questions/questions';
import Communication from '../components/Communication/communication';
import HowToUse from '../components/HowToUse/HowToUse';
import UserExperience from '../components/UserExperience/UserExperience';
import MealSlider from '../components/MealSlider/MealSlider';

const MainPage = () => {
  return (
    <div>
      <section id="intro">
      <Header />
      </section>
      <section id="services"><Intro /></section>
      <hr />
      <section id="howToUse"><HowToUse /></section>
      <section id="userExperience"><UserExperience /></section>
      <section id="team"><Team /></section>
      <hr />
      <Services />
      
      <section id="mealSlider"><MealSlider /></section>
      <section id="questions"><Questions /></section>
      <section id="communication"><Communication /></section>
    </div>
  )
}

export default MainPage;
