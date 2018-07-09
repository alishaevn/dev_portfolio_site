import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class Safer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
        <main className='project-container'>
          <section className='project-intro'>
            <p className='project-tagline'>
              SafeReport/safeR aims to keep the community safer by making sure they are up to date on local crimes and incidents in the area.
              Visitors aren't required to log in to see incidents, they are however required to register if they would like to make a report. It uses geolocation in order to show the most relevant incidents, each of which is indicated by 1 of 5 incident type markers. Creating a report requires a date, time, type and description;  each user can also view all of their reports on their dashboard. 
            </p>
            <a className='photo-link'
              href='https://safer.netlify.com/'
              target='_blank'
              rel='noopener noreferrer' >
              <img className='project-responsive-mock'
                src={require('../../images/portfolio/safeR/safer_responsive.png')} 
                alt='safeR Mockup' />
            </a>
          </section>
          <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN • REACT NATIVE </p>
          
          <section className='project-details'>
            <div className='info-box'>
              <h2 className='project-heading'> Why </h2>
              <p className='project-info'>
                The initial idea for the app was to allow users to report hit and run's with details that law enforcement would be able to use to investigate cases. It quickly evolved into a larger idea that allows users to report various types of incidents so that local residents as well as local law enforcement may be aware.
              </p>
            </div>
            <div className='info-box'>
              <h2 className='project-heading'> My Role </h2>
              <p className='project-info'>
                I worked on this app with 4 other developers who affectionately called ourselves MAAJAC. My participation was on the front end of the web and mobile apps creating the custom incident markers, implementing our ideas using Google Map (web) and Expo Map (React Native), creating the dashboard and various design features.
              </p>
            </div>
          </section>
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer1.png')} 
              alt='safeR Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer2.png')} 
              alt='safeR Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer3.png')} 
              alt='safeR Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer_native.jpg')} 
              alt='safeR Mockup' />
          </div>
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
        </main>
        <Footer />
      </div>
    )
  }
}


/*
Resources:
 - https://reacttraining.com/react-router/web/guides/scroll-restoration 
 */