import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/about.css';

export default class About extends Component {
  render() {

    return (
      <section className='about' id='about'>
        <img 
          src={require('../images/headshot.png')} 
          alt='headshot' 
          className='headshot' />
        <h1 className='hi'>
          Hi!</h1>
        <h2 className='about-welcome'>
          My name is Alisha, thanks for stopping by.</h2>
        <p className='about-me'> 
          As someone educated in Graphic Design & Full Stack Development, I can "speak the language" of Web Designers & Back End Developers; thus bridging the gap across the web development process. My personal & professional experiences with leadership, education & communication would prove valuable on a team of fellow motivated creatives. Furthermore, I’m continually striving to be better so I welcome feedback & respond accordingly.</p>

        <p className='about-me'> 
          Apart from development & design I enjoy photography
            (<Link to='/photos' className='link about-link'>see here</Link>)
          , brain games, coaching volleyball & being a basketball fan. </p>

        <h2 className='heading'>
          Applicable skills:</h2>
        <section className='skillset-section'>
          <aside className='skillset'>
            <img 
              src={require('../images/icon-FED.png')} 
            alt='Front End Development' 
            className='skills-icon' />
            <div>
              <h5 className='skill-type'>
                Front End Development</h5>
              <p className='skill-description'>
                My love for the aesthetics & challenges presented in Front End Development drive me to code efficient & beautiful websites using semantic HTML, CSS, Javascript and front end technologies such as React & Redux as necessary.</p>
            </div>
          </aside>
          <aside className='skillset'>
            <img 
              src={require('../images/icon-UID.png')} 
            alt='User Interface Design' 
            className='skills-icon' />
            <div>
              <h5 className='skill-type'>
                User Interface Design</h5>
              <p className='skill-description'>
                Details matter. I’m experienced with designing wireframes, performing market research & creating user personas in order to provide engaging, yet simplistic client interactions.</p>
            </div>
          </aside>
          <aside className='skillset'>
            <img 
              src={require('../images/icon-ID.png')} 
            alt='Identity Design' 
            className='skills-icon' />
            <div>
              <h5 className='skill-type'>
                Identity Design</h5>
              <p className='skill-description'>
                I develop identities for brands & individuals which involves logos, style guides ( imagery, brand colors, tagline, etc.), social media concepts, print collateral & apparel. 
                (<Link to='/identity' className='link about-link'>See here</Link>) </p>
            </div>
          </aside>
        </section>
      </section>
    )
  }
}

/**
Resources:
 - https://github.com/zeit/next.js/issues/1605
 */