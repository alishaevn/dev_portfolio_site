import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/caseStudies.css';


export default class FoodiePhonetics extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    let title;
    let tagline;
    let size;

    if (this.props.match.path === '/foodiephonetics') {
      title='FOODIE PHONETICS';
      tagline='FULL STACK DEVELOPMENT • UI/UX DESIGN';
      size = 'header-large'
    }

    return (
      <section className='foodie-phonetics'>
        <Header 
          title={title}
          tagline={tagline}
          size={size} />
          <aside className='project-info'>
            <img className='dev-mockup'
              src={require('../images/studies/fp_mockup.png')} 
              alt='Foodie Phonetics Mockup'/>
            <section>
              <p className='project-summary fp-about'>
                Foodie Phonetics teaches the user how to say the most common food items in their language of choice! 
                {/* <br /><br />
                Username: demo <br />
                Password: demouser123  */}
                </p>
              <div className='project-details'>
                <h3 className='view-website'>
                  <a className='link live-portfolio-link'
                    href='https://foodiephonetics.netlify.com/'
                    target='_blank'
                    rel='noopener noreferrer' >
                      View Website</a>
                  </h3>
                <div className='github-repos'>
                  <div>
                    <a href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to client repo' />
                      </a>
                    <a href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to server repo' />
                      </a>
                  </div>
                  <div>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client' > 
                        Client 
                      </a>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server' > 
                        Server 
                      </a>
                  </div>
                </div>
              </div>
            </section>
          </aside>

          <div className='standouts'>
            <div className='standout-block'>
              <h2 className='standout-title'>
                Key Features </h2>
              <ul className='standout-details'>
                <li>
                  Spaced repitition algorithm</li>
                <li>
                  Keeps track of user score</li>
                <li>
                  Correct answers get moved further down the list</li>
                <li>
                  Incorrect answers get moved to the front of the list</li>
                </ul>
              </div>
            <div className='standout-block'>
              <h2 className='standout-title'>
                My Role </h2>
              <ul className='standout-details'>
                <li>
                  Implemented algorithm on the server</li>
                <li>
                  Created all schema's & models</li>
                <li>
                  RESTful API endpoints</li>
                <li>
                  CSS media queries</li>
                </ul>
              </div>
            <div className='standout-block'>
              <h2 className='standout-title'>
                Tech Stack </h2>
              <ul className='standout-details'>
                <li>
                  React</li>
                <li>
                  Redux</li>
                <li>
                  Javascript</li>
                <li>
                  HTML</li>
                <li>
                  CSS</li>
                <li>
                  Node</li>
                <li>
                  Express</li>
                <li>
                  MongoDB</li>
                <li>
                  Mocha</li>
                <li>
                  Chai</li>
                </ul>
              </div>
          </div>

          <div className='photo-bank'>
            <img className='project-photo'
              src={require('../images/studies/fp_01.png')} 
              alt='Foodie Phonetics Mockup' />
            <img className='project-photo'
              src={require('../images/studies/fp_04.png')} 
              alt='Foodie Phonetics Mockup' />
            <img className='project-photo'
              src={require('../images/studies/fp_03.png')} 
              alt='Foodie Phonetics Mockup' />
            <img className='project-photo'
              src={require('../images/studies/fp_02.png')} 
              alt='Foodie Phonetics Mockup' />
          </div>
        <Contact />
      </section>
    )

  }
}
