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
              The committee for the 41st Annual National Christian Singles seminar asked that I design a logo for print and apparel uses during the 2017 weekend event in addition to a souvenir booklet. The inspiration behind the pictorial mark came from 1 Corinthians 7:32-35 and it represent’s one’s heart being on fire for the Lord.
            </p>
            <div className='photo-link'>
              <img className='project-responsive-mock'
                src={require('../../images/portfolio/ncss/ncss_mockup.png')} 
                alt='NCSS Mockup' />
            </div>
          </section>
          <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN </p>

          <img className='project-photos-column'
            src={require('../../images/portfolio/ncss/ncss_7.png')} 
            alt='NCSS Mockup' />
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/ncss/ncss_3.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/ncss/ncss_black.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/ncss/ncss_4.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/ncss/ncss_6.png')} 
              alt='NCSS Mockup' />
          </div>

        </main>
        <Footer />
      </div>
    )

  }
}
