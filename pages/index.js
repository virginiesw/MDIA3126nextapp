import React, { useState } from 'react';
import Hero from '../comps/Hero';
import Signup from '../comps/SignupForm';
import Welcome from '../comps/WelcomeForm';
import Header from '../comps/Header';
import Button from '../comps/Button';
import WelcomeBanner from '../comps/WelcomeBanner';
import Popup from '../comps/PopUp';



export default function Home() {

  //PAGE 1
  // return <div className="home">
  //   <div className="hero">
  //     <Hero />
  //   </div>
  //   <div className="welcome">
  //     <Welcome />
  //   </div>
  // </div>

  //PAGE 2
  // return <div className="home">
  //  <div className="Signup">
  //   <Signup />
  // </div>
  // <div className="hero">
  //   <Hero src={"/beach.png"}/>
  // </div>


  return <div className="page3">
    <div className="Nav">
      <Header />
    </div>
    <div className="body">
      <div className="createbutton">
        <Button text="Start Creating" />
      </div>
      <div className="line"></div>
      <div className="WelcomeMessage">
        <WelcomeBanner />
      </div>
    </div>
    <div className="popUp">
      <Popup />
    </div>

  </div>
}
