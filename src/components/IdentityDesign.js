import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/identities.css';

export default class IdentityDesign extends Component {

  render() {
    let title = this.props.match.path === '/identity'
      ? 'IDENTITY DESIGN'
      : ''
    
    return(
      <section className='identity-design'>
        <Header 
          title={title} />
        <header className='branding'>
          <p className='why-brands'>
            I used to love making collages, which is what led me to pursue a career in graphic design. After earning my M.F.A. I shifted almost exclusively into brand identity design because I enjoyed & appreciated the process. </p>
            <br />
          <p className='why-brands'>
            Below are a few examples of my work.</p>
        </header>

        <aside className='brand-project'>
          <div className='brand-flex-1'>
            <div>
              <h2 className='brand-name'>
                69th St. CoC</h2>
              <p className='brand-summary'>
                The 69th Street Church of Christ was in dire need of a rebrand in order to give them a solid visual identity. I also aimed to simplify their current visual processes. The pictorial mark is a representation of the building that they meet at, while the colors and typography used align with their tone of voice. </p>
            </div>
            <img className='brand-block-photo'
              src={require('../images/identity/69th_01.png')} 
              alt='69th St. CoC Brand Identity' />
          </div>
          <img className='brand-rectangle-photo'
            src={require('../images/identity/69th_02.png')} 
            alt='69th St. CoC Brand Identity' />
          <div className='brand-flex-2'>
            <img className='brand-block-photo-2'
              src={require('../images/identity/69th_03.png')} 
              alt='69th St. CoC Brand Identity' />
            <img className='brand-block-photo-2'
              src={require('../images/identity/69th_04.png')} 
              alt='69th St. CoC Brand Identity' />
          </div>
        </aside>

        <aside className='brand-project'>
          <div className='brand-flex-1'>
            <div>
              <h2 className='brand-name'>
                NCSS</h2>
              <p className='brand-summary'>
                The committee for the 41st Annual National Christian Singles seminar asked that I design a logo for print and apparel uses during the 2017 weekend event in addition to a souvenir booklet. The inspiration behind the pictorial mark came from 1 Corinthians 7:32-35 and it represent’s one’s heart being on fire for the Lord. </p>
            </div>
            <img className='brand-block-photo'
              src={require('../images/identity/ncss_01.png')} 
              alt='NCSS Brand Identity' />
          </div>
          <img className='brand-rectangle-photo'
            src={require('../images/identity/ncss_02.png')} 
            alt='NCSS Brand Identity' />
          <div className='brand-flex-2'>
            <img className='brand-block-photo-2'
              src={require('../images/identity/ncss_03.png')} 
              alt='NCSS Brand Identity' />
            <img className='brand-block-photo-2'
              src={require('../images/identity/ncss_04.png')} 
              alt='NCSS Brand Identity' />
          </div>
        </aside>

        <aside className='brand-project'>
          <div className='brand-flex-1'>
            <div>
              <h2 className='brand-name'>
                Fresh Market</h2>
              <p className='brand-summary'>
                The following is the culmination of a personal rebranding effort for The Fresh Market. My research showed they had a lack of brand recognition outside of the Southeastern markets. The intention of my rebrand was to increase the overall brand awareness in order to allow for successful expansion into the western markets. </p>
            </div>
            <img className='brand-block-photo'
              src={require('../images/identity/TFM_01.png')} 
              alt='Fresh Market Brand Identity' />
          </div>
          <img className='brand-rectangle-photo'
            src={require('../images/identity/TFM_02.png')} 
            alt='Fresh Market Brand Identity' />
          <div className='brand-flex-2'>
            <img className='brand-block-photo-2'
              src={require('../images/identity/TFM_03.png')} 
              alt='Fresh Market Brand Identity' />
            <img className='brand-block-photo-2'
              src={require('../images/identity/TFM_04.png')} 
              alt='Fresh Market Brand Identity' />
          </div>
        </aside>
        
        <Contact />
      </section>
    )
  }
}