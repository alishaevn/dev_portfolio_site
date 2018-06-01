import React, { Component } from 'react'

import './portfolio.css'


export default class Portfolio extends Component {
  render() {

    return (
      <div className='portfolio-component' id='portfolio'>
        <h3 className='portfolio-title'>PORTFOLIO</h3>
        <div className='row-one' >

          <div className='project-one'>
            <a href='https://safer.netlify.com/'
              target='_blank'
              rel='noopener noreferrer' >
              <img src={require('../images/portfolio/safer_responsive.png')} alt='safeR Mockup' className='portfolio-responsive-mock' />
            </a>
            <a href='https://safer.netlify.com/' 
              className='portfolio-project-title'
              target='_blank'
              rel='noopener noreferrer' > 
              safeR 
            </a>
            <p className='portfolio-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN • REACT NATIVE </p>
          </div>


          <div className='project-two'>
            <a href='https://foodiephonetics.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={require('../images/portfolio/fp_responsive.png')} alt='Foodie Phonetics Mockup' className='portfolio-responsive-mock' />
            </a>
            <a href='https://foodiephonetics.netlify.com/' 
              className='portfolio-project-title'
              target='_blank'
              rel='noopener noreferrer' > 
              Foodie Phonetics 
            </a>
            <p className='portfolio-services'>FULL STACK DEVELOPMENT • UI/UX DESIGN</p>
          </div>

          
          <div className='project-three'>
            <a href='https://for-the-win-app.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={require('../images/portfolio/ftw_responsive.png')} alt='For The Win Mockup' className='portfolio-responsive-mock' />
              </a>
            <a href='https://for-the-win-app.netlify.com/' 
              className='portfolio-project-title'
              target='_blank'
              rel='noopener noreferrer'> 
              For The Win 
            </a>
            <p className='portfolio-services'>FULL STACK DEVELOPMENT • UI/UX DESIGN</p>
          </div>

        </div>

        <div className='row-two' >

          <div className='project-four'>
            <img src={require('../images/portfolio/69th_mockup.png')} 
              alt='69th CoC Mockup' 
              className='portfolio-responsive-mock' />
            <p className='portfolio-project-title'> 
              69th Street 
            </p>
            <p className='portfolio-services'> 
              VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY
            </p>
          </div>


          <div className='project-five'>
            <img src={require('../images/portfolio/ncss_mockup.png')} 
              alt='NCSS Mockup' 
              className='portfolio-responsive-mock' />
            <p className='portfolio-project-title'> 
              NCSS 
            </p>
            <p className='portfolio-services'> 
              VISUAL BRAND IDENTITY • PRINT DESIGN 
            </p>
          </div>

          
          <div className='project-six'>
            <img src={require('../images/portfolio/frsh_mkt_mockup.png')} 
              alt='Fresh Market Mockup' 
              className='portfolio-responsive-mock' />
            <p className='portfolio-project-title'> 
              Fresh Market 
            </p>
            <p className='portfolio-services'> 
              VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY
            </p>
          </div>

        </div>
      </div>
    )

  }
}
