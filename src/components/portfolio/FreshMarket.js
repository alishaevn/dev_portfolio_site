import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './projects.css';


export default class FreshMarket extends Component {
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
            <p className='project-title'> Fresh Market </p> 
            <div className='opening-sequence'>
              <div className='branding-main-photo'>
                <img className='branding-project-responsive-mock'
                src={require('../../images/portfolio/frsh_mkt_mockup.png')} 
                alt='NCSS Mockup' />
              </div>
              <p className='design-project-summary'>
              The following is the culmination of a fictional rebranding effort for The Fresh Market. I chose to rebrand them as a result of its lack of brand recognition outside of the Southeastern markets. The research and development phases led to the assembling of a new logo, style guide [including imagery, brand colors, a tagline, etc.], social media concepts, website design, print ads, apparel, promotional items and a guerilla marketing tactic. The intention was to increase the brand awareness in order to allow for successful expansion into the western markets.
              </p>
            </div>

            <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>

            <div className='photo-bank'>
              <img className='project-photos-row'
                src={require('../../images/portfolio/design/TFM-02.png')} 
                alt='NCSS Mockup' />
              <img className='project-photos-row'
                src={require('../../images/portfolio/design/TFM-03.png')} 
                alt='NCSS Mockup' />
              <img className='project-photos-row'
                src={require('../../images/portfolio/design/TFM-06.png')} 
                alt='NCSS Mockup' />
            </div>
            <img className='project-photos-column'
              src={require('../../images/portfolio/design/TFM-07.png')} 
              alt='NCSS Mockup' />
          </div>

      </div>
    )

  }
}
