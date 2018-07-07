import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class NCSS extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        <NavBar />
        <p className='branding-project-title'> NCSS </p> 
        <main className='project-container'>
          <section className='project-intro'>
            <p className='project-tagline'>
              The committee for the 41st Annual National Christian Singles seminar asked that I design a logo for print and apparel uses during the 2017 weekend event in addition to a souvenir booklet. My idea was to design a united look for all collateral in order to simplify the current visual processes. The inspiration behind the pictorial mark came from 1 Corinthians 7:32-35 and it represent’s one’s heart being on fire for the Lord.
            </p>
            <div className='photo-link'>
              <img className='project-responsive-mock'
                src={require('../../images/portfolio/ncss_mockup.png')} 
                alt='NCSS Mockup' />
            </div>
          </section>
          <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN </p>

          <section className='project-details'>
            <div className='info-box'>
              <h2 className='project-heading'> The Motivation </h2>
              <p className='project-info'>
                The initial idea for the app was to allow users to report hit and run's with details that law enforcement would be able to use to investigate cases. It quickly evolved into a larger idea that allows users to report various types of incidents so that local residents as well as local law enforcement may be aware.
              </p>
            </div>
            <div className='info-box'>
              <h2 className='project-heading'> My Role </h2>
              <p className='project-info'>
                I worked on this app with 4 other developers who affectionately called ourselves MAAJAC. My participation was on the front end of the web and mobile apps creating the custom incident markers, working on the map, the dashboard and design.
              </p>
            </div>
          </section>
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/ncss_3.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/ncss_4.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/ncss_6.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/ncss_6.png')} 
              alt='NCSS Mockup' />
          </div>
          <img className='project-photos-column'
            src={require('../../images/portfolio/design/ncss_7.png')} 
            alt='NCSS Mockup' />
        </main>
        <Footer />
      </div>
    )

  }
}
