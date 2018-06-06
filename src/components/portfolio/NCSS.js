import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './design.css';


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

          <div className='design-project'>
            {/* <div className='opening-sequence'> */}
              <img className='design-project-responsive-mock'
                src={require('../../images/portfolio/ftw_responsive.png')} 
                alt='NCSS Mockup' />
              <div className='description-block'>
                <p className='design-project-title'> 
                  National Christian Singles Seminar 
                </p>
              </div>
            {/* </div> */}
            <p className='design-project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>
            <div className='desktop-only'>
              <p className='design-project-summary'>
              The committee for the 41st Annual National Christian Singles seminar asked that I design a logo for print and apparel uses during the 2017 weekend event in addition to a souvenir booklet. My idea was to design a united look for all collateral in order to simplify the current visual processes. The inspiration behind the pictorial mark came from 1 Corinthians 7:32-35 and it represent’s one’s heart being on fire for the Lord.
              </p>
            </div>
            <div className='photo-bank'>
              <img className='design-project-responsive-mock'
                src={require('../../images/portfolio/ftw_responsive.png')} 
                alt='NCSS Mockup' />
              <img className='design-project-responsive-mock'
                src={require('../../images/portfolio/ftw_responsive.png')} 
                alt='NCSS Mockup' />
              <img className='design-project-responsive-mock'
                src={require('../../images/portfolio/ftw_responsive.png')} 
                alt='NCSS Mockup' />
              <img className='design-project-responsive-mock'
                src={require('../../images/portfolio/ftw_responsive.png')} 
                alt='NCSS Mockup' />
            </div>
            
          </div>

      </div>
    )

  }
}