import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/css/caseStudies.css';

export default class Safer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {

    let title;
    let tagline;

    if (this.props.match.path === '/safer') {
      title='SAFER';
      tagline='FULL STACK DEVELOPMENT • UI/UX DESIGN • MOBILE APP'
    }

    return(
      <section className='safer'>
        <Header 
          title={title}
          tagline={tagline} />
          <aside className='project-info'>
            <img className='dev-mockup'
                src={require('../images/studies/safer_mockup.png')} 
                alt='Safer Mockup'/>
            <section>
              <p className='project-summary'>
                SafeReport/safeR aims to keep the community safer by making sure they are up to date on local crimes and incidents in the area. 
                {/* <br /><br />
                username: demo <br />
                password: demouser123 */}
                </p>
              <div className='project-details'>
                <h3 className='view-website'>
                  <a className='link live-portfolio-link'
                    href='https://safer.netlify.com/'
                    target='_blank'
                    rel='noopener noreferrer' >
                      View Website</a>
                  </h3>
                <div className='github-repos'>
                  <div>
                    <a href='https://github.com/thinkful-ei18/maajac-client'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to client repo' />
                      </a>
                    <a href='https://github.com/thinkful-ei18/majaac-server'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to server repo' />
                      </a>
                    <a href='https://github.com/thinkful-ei18/MOBILE-maajac-client'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to mobile repo' />
                      </a>
                  </div>
                  <div>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/maajac-client' > 
                        Client 
                      </a>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/majaac-server' > 
                        Server 
                      </a>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/MOBILE-maajac-client' > 
                        Mobile 
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
                  No log in required</li>
                <li>
                  Uses geolocation</li>
                <li>
                  Anonymous reporting</li>
                <li>
                  Search capabilities</li>
                </ul>
              </div>
            <div className='standout-block'>
              <h2 className='standout-title'>
                My Role </h2>
              <ul className='standout-details'>
                <li>
                  React Native conditional navigation</li>
                <li>
                  Google/React Map functionality</li>
                <li>
                  Dashboard component</li>
                <li>
                  Custom incident markers</li>
                </ul>
              </div>
            <div className='standout-block'>
              <h2 className='standout-title'>
                Tech Stack </h2>
              <ul className='standout-details'>
                <li>
                  React</li>
                <li>
                  React Native</li>
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
                <li>
                  Jest</li>
                <li>
                  Enzyme</li>
                </ul>
              </div>
          </div>

          <div className='photo-bank'>
            <img className='project-photo'
              src={require('../images/studies/safer_01.png')} 
              alt='safeR Mockup' />
            <img className='project-photo'
              src={require('../images/studies/safer_02.png')} 
              alt='safeR Mockup' />
            <img className='project-photo'
              src={require('../images/studies/safer_03.png')} 
              alt='safeR Mockup' />
            <img className='project-photo'
              src={require('../images/studies/safer_04.jpg')} 
              alt='safeR Mockup' />
          </div>
        <Contact />
      </section>
    )
  }
}
