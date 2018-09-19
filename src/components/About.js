import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/about.css';

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
          Educated in Graphic Design <em>and</em> Web Development, I understand the jargon and methodologies of both disciplines; thus bridging the gap between them. I enjoy creating positive user experiences through beautiful user interfaces from scratch, or with Content Management Systems. I'm continuously working to improve my skillset and I encourage and follow through on feedback regarding my code. My inquisitiveness, integrity, creativity and overall friendly demeanor have led me to have positive interactions with my peers, co-workers, mentors, managers and more. Furthermore, my personal and professional experiences with leadership, education and communication would prove valuable on a team of fellow motivated professionals.               
          <br /><br />
          Apart from development & design I enjoy photography
            (<Link to='/photos' className='link about-link'>see here</Link>)
          , brain games, coaching volleyball and being a sports fan (especially basketball 😎).
          </p>

        <h2 className='heading'>
          Applicable skills:</h2>
        <section className='skillset-section'>
          <aside className='skillset'>
            <img 
              src={require('../images/icon-FED.png')} 
            alt='Web Development' 
            className='skills-icon fed-icon' />
            <div>
              <h5 className='skill-type'>
                Web Development</h5>
              <p className='skill-description'>
                The technologies I work with include, but are not limited to: HTML5, CSS3, SASS, JavaScript, React, Redux, jQuery, Git, GitHub, Adobe Creative Suite, Sketch, MongoDB, Node & Express.</p>
            </div>
          </aside>
          <aside className='skillset'>
            <img 
              src={require('../images/icon-UID.png')} 
            alt='User Interface Design' 
            className='skills-icon uid-icon' />
            <div>
              <h5 className='skill-type'>
                User Interface Design</h5>
              <p className='skill-description'>
                Details matter. I’m experienced with designing wireframes, storyboards, performing market research & creating user personas in order to provide engaging, yet simplistic client interactions.</p>
            </div>
          </aside>
          <aside className='skillset'>
            <img 
              src={require('../images/icon-ID.png')} 
            alt='Identity Design' 
            className='skills-icon id-icon' />
            <div>
              <h5 className='skill-type'>
                Identity Design</h5>
              <p className='skill-description'>
                I develop identities for brands & individuals which involves logos, style guides ( imagery, brand colors, tagline, etc.), social media concepts, print collateral & apparel. 
                (<Link to='/identity' className='link about-link'>see here</Link>) </p>
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
 - https://emojipedia.org/
 */