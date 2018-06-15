import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './projects.css';


export default class NCSS extends Component {
  constructor() {
    super();
    this.state = {
      close: false
    }
  }

  render() {
    if (this.state.close) {
      return <Redirect to='/' />
    }

    return (
      <div className='project-component'>
        <p className='close-portfolio'
          onClick={() => this.setState({ close: true})} > 
            X
        </p>

          <div className='portfolio-project'>
            <p className='branding-project-title'> NCSS </p> 
            <div className='opening-sequence'>
              <div className='branding-main-photo'>
                <img className='branding-project-responsive-mock'
                src={require('../../images/portfolio/ncss_mockup.png')} 
                alt='NCSS Mockup' />
              </div>
              <p className='design-project-summary'>
              The committee for the 41st Annual National Christian Singles seminar asked that I design a logo for print and apparel uses during the 2017 weekend event in addition to a souvenir booklet. My idea was to design a united look for all collateral in order to simplify the current visual processes. The inspiration behind the pictorial mark came from 1 Corinthians 7:32-35 and it represent’s one’s heart being on fire for the Lord.
              </p>
            </div>

            <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN </p>

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
            </div>
            <img className='project-photos-column'
              src={require('../../images/portfolio/design/ncss_7.png')} 
              alt='NCSS Mockup' />
          </div>

      </div>
    )

  }
}
