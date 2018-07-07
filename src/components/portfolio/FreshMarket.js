import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class FreshMarket extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        <NavBar />
        <p className='branding-project-title'> Fresh Market </p> 
        <main className='project-container'>
          <section className='project-intro'>
            <p className='project-tagline'>
              The following is the culmination of a fictional rebranding effort for The Fresh Market. I chose to rebrand them as a result of its lack of brand recognition outside of the Southeastern markets. The research and development phases led to the assembling of a new logo, style guide [including imagery, brand colors, a tagline, etc.], social media concepts, website design, print ads, apparel, promotional items and a guerilla marketing tactic. The intention was to increase the brand awareness in order to allow for successful expansion into the western markets.
            </p>
            <div className='photo-link'>
              <img className='project-responsive-mock'
                src={require('../../images/portfolio/frsh_mkt_mockup.png')} 
                alt='Fresh Market Mockup' />
            </div>
          </section>
          <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>

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
              src={require('../../images/portfolio/design/TFM-02.png')} 
              alt='Fresh Market Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/TFM-03.png')} 
              alt='Fresh Market Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/TFM-06.png')} 
              alt='Fresh Market Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/design/TFM-06.png')} 
              alt='Fresh Market Mockup' />
          </div>
          <img className='project-photos-column'
            src={require('../../images/portfolio/design/TFM-07.png')} 
            alt='Fresh Market Mockup' />
        </main>
        <Footer />
      </div>
    )

  }
}
