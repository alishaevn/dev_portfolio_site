import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class FoodiePhonetics extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        <NavBar />
        <a className='project-title'
          href='https://foodiephonetics.netlify.com/' 
          target='_blank'
          rel='noopener noreferrer' > 
            Foodie Phonetics 
        </a>
        <main className='project-container'>
          <section className='project-intro'>
            <p className='project-tagline'>
              Using a spaced repetition algorithm, Foodie Phonetics teaches the user how to say the most common food items in their language of choice. Each time the user gets a question correct, that question is moved farther back in a singly linked list. If the user gets a question incorrect, it will be moved to the top of the list instead.
            </p>
            <a className='photo-link'
              href='https://foodiephonetics.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
                <img className='project-responsive-mock'
                  src={require('../../images/portfolio/fp_responsive.png')}
                  alt='Foodie Phonetics Mockup' />
            </a>
          </section>
          <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN </p>

          <section className='project-details'>
            <div className='info-box'>
              <h2 className='project-heading'> The Motivation </h2>
              <p className='project-info'>
                The initial idea for the app was to allow users to report hit and run's with details that law enforcement would be able to use to investigate cases. It quickly evolved into a larger idea that allows users to report various types of incidents so that local residents as well as local law enforcement may be aware.
              </p>
            </div>
            <div className='info-box'>
              <h2 className='project-heading'> My Role </h2>
              <p className='project-info'>
                I worked on this app with 4 other developers who affectionately called ourselves MAAJAC. My participation was on the front end of the web and mobile apps creating the custom incident markers, working on the map, the dashboard and design.
              </p>
            </div>
          </section>
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer1.png')} 
              alt='Foodie Phonetics Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer2.png')} 
              alt='Foodie Phonetics Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer3.png')} 
              alt='Foodie Phonetics Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer_native.jpg')} 
              alt='Foodie Phonetics Mockup' />
          </div>
          <p className='live-portfolio-par'>
            <a className='live-portfolio-link'
              href='https://foodiephonetics.netlify.com/'
              target='_blank'
              rel='noopener noreferrer' >
                View the Live Site
            </a>
          </p>
          <div className='github-repos'>
            <div>
              <a href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to client repo' />
              </a>
              <a href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to server repo' />
              </a>
            </div>
            <div>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client' > 
                  Client 
              </a>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server' > 
                  Server 
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )

  }
}
