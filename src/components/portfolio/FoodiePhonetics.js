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
              <h2 className='project-heading'> Why </h2>
              <p className='project-info'>
                The purpose behind this app was to create a spaced repition project that used a data structure algorithm. My pair programmer and I decided that we would use a singly linked list for this purpose.
              </p>
            </div>
            <div className='info-box'>
              <h2 className='project-heading'> My Role </h2>
              <p className='project-info'>
                The majority of my role in this project was on the server side dealing with the algorithm, user authentication and routes, although I did some work on the client side as well. The most challenging, and rewarding, part of this project for me was figuring out the logic on how to implement the singly linked list as well as the logic for creating my own version of the "insert at" method. 
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
