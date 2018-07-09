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
                src={require('../../images/portfolio/TFM/frsh_mkt_mockup.png')} 
                alt='Fresh Market Mockup' />
            </div>
          </section>
          <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>

          <img className='project-photos-column'
            src={require('../../images/portfolio/TFM/TFM-07.png')} 
            alt='Fresh Market Mockup' />
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/TFM/TFM-02.png')} 
              alt='Fresh Market Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/TFM/Book_3.png')} 
              alt='Fresh Market Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/TFM/TFM-03.png')} 
              alt='Fresh Market Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/TFM/TFM-04.png')} 
              alt='Fresh Market Mockup' />
          </div>

        </main>
        <Footer />
      </div>
    )

  }
}
