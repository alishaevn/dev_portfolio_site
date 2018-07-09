import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class coc69th extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        <NavBar />
        <p className='branding-project-title'> 69th Street CoC </p> 
        <main className='project-container'>

          <section className='project-intro'>
            <p className='project-tagline'>
               The 69th Street Church of Christ was in dire need of a rebrand in order to give them a solid visual identity. I also aimed to simplify their current visual processes. The pictorial mark is a representation of the building that they meet at, while the colors and typography used align with their tone of voice. 
            </p>
            <div className='photo-link'>
              <img className='branding-project-responsive-mock'
              src={require('../../images/portfolio/69th_mockup.png')} 
              alt='69th St. Mockup' />
            </div>
          </section>
          <p className='project-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>

          <img className='project-photos-column'
            src={require('../../images/portfolio/69th/69th-07.png')} 
            alt='NCSS Mockup' />
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/69th/69th-06.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/69th/69th-05.png')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/69th/69th_Mockup.jpg')} 
              alt='NCSS Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/69th/69th_hoodie.png')} 
              alt='NCSS Mockup' />
          </div>
          
        </main>
        <Footer />

      </div>
    )

  }
}
