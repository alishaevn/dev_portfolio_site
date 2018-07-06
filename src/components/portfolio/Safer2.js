import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class Safer2 extends Component {

  render() {

    return(
      <div>
        <NavBar />
        <a className='project-title'
          href='https://safer.netlify.com/' 
          target='_blank'
          rel='noopener noreferrer' > 
          safeR 
        </a>
        <div className='project-container'>
          <p className='project-tagline'>
            SafeReport/safeR aims to keep the community safer by making sure they are up to date on local crimes and incidents in the area.
          </p>
          <a className='photo-link'
            href='https://safer.netlify.com/'
            target='_blank'
            rel='noopener noreferrer' >
            <img className='project-responsive-mock'
              src={require('../../images/portfolio/safer_responsive.png')} 
              alt='safeR Mockup' />
          </a>
          <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN • REACT NATIVE </p>
          <p className='live-portfolio-par'>
              <a className='live-portfolio-link'
                href='https://safer.netlify.com/'
                target='_blank'
                rel='noopener noreferrer' >
                  View the Live Site
              </a>
          </p>
          <div className='github-repos'>
            <div>
              <a href='https://github.com/thinkful-ei18/maajac-client'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to client repo' />
              </a>
              <a href='https://github.com/thinkful-ei18/majaac-server'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to server repo' />
              </a>
              <a href='https://github.com/thinkful-ei18/MOBILE-maajac-client'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to mobile repo' />
              </a>
            </div>
            <div>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/maajac-client' > 
                  Client 
              </a>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/majaac-server' > 
                  Server 
              </a>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/MOBILE-maajac-client' > 
                  Mobile 
              </a>
            </div>
          </div>
          <h3 className='project-heading'> Why </h3>
          <p className='project-details'>
            The initial idea for the app was to allow users to report hit and run's with details that law enforcement would be able to use to investigate cases. It quickly evolved into a larger idea that allows users to report various types of incidents so that local residents as well as local law enforcement may be aware.
          </p>
          <h3 className='project-heading'> How </h3>
          <p className='project-details'>
            safeR does not require that visitors log in to see incidents, it does however require a visitor to register if they would like to make a report. It uses geolocation in order to show the most relevant incidents, each of which is indicated by 1 of 5 incident type markers. Each report requires a date, time, type and description and each user can view each of their reports on their dashboard. 
          </p>
          <h3 className='project-heading'> My Role </h3>
          <p className='project-details'>
            I worked on this app with 4 other developers who affectionately called ourselves MAAJAC. My participation was on the front end of the web and mobile apps creating the custom incident markers, working on the map, the dashboard and design.
          </p>
          <div className='photo-bank'>
              <img className='project-photos-row'
                src={require('../../images/portfolio/safeR/safer1.png')} 
                alt='NCSS Mockup' />
              <img className='project-photos-row'
                src={require('../../images/portfolio/safeR/safer2.png')} 
                alt='NCSS Mockup' />
              <img className='project-photos-row'
                src={require('../../images/portfolio/safeR/safer3.png')} 
                alt='NCSS Mockup' />
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}