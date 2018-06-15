import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './projects.css';


export default class coc69th extends Component {
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
            <p className='branding-project-title'> 69th Street CoC </p> 
            <div className='opening-sequence'>
              <div className='branding-main-photo'>
                <img className='branding-project-responsive-mock'
                src={require('../../images/portfolio/69th_mockup.png')} 
                alt='NCSS Mockup' />
              </div>
              <p className='design-project-summary'>
              The 69th Street Church of Christ was in need of a logo to give them a solid visual identity. The pictorial mark is a representation of the building that they meet at, while the colors and typography used align with their tone of voice. In addition to a logo, a new bulletin, business cards and invitation cards were designed.
              </p>
            </div>

            <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>

            <div className='photo-bank'>
              <img className='project-photos-row'
                src={require('../../images/portfolio/design/69th-06.png')} 
                alt='NCSS Mockup' />
              <img className='project-photos-row'
                src={require('../../images/portfolio/design/69th-04.png')} 
                alt='NCSS Mockup' />
              <img className='project-photos-row'
                src={require('../../images/portfolio/design/69th-05.png')} 
                alt='NCSS Mockup' />
            </div>
            <img className='project-photos-column'
              src={require('../../images/portfolio/design/69th-07.png')} 
              alt='NCSS Mockup' />
          </div>

      </div>
    )

  }
}
