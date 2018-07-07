import React, { Component } from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './projects.css';


export default class ForTheWin extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        <NavBar />
        <a className='project-title'
          href='https://for-the-win-app.netlify.com/'
          target='_blank'
          rel='noopener noreferrer'> 
            For The Win 
        </a>
        <main className='project-container'>
          <section className='project-intro'>
            <p className='project-tagline'>
              Make or join a fantasy basketball league (up to 5 members) and keep up with the stats of your favorite basketball players. Once you register for a free account simply choose 10 players to be on your team and track their stats on the dashboard. Each occurence of an offensive or defensive stat counts as a single point towards the user's total score. 
            </p>
            <a className='photo-link'
              href='https://for-the-win-app.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
                <img className='project-responsive-mock'
                src={require('../../images/portfolio/ftw_responsive.png')} 
                alt='For The Win Mockup' />
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
              alt='For The Win Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer2.png')} 
              alt='For The Win Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer3.png')} 
              alt='For The Win Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/safeR/safer_native.jpg')} 
              alt='For The Win Mockup' />
          </div>
          <p className='live-portfolio-par'>
            <a className='live-portfolio-link'
              href='https://for-the-win-app.netlify.com/'
              target='_blank'
              rel='noopener noreferrer' >
                View the Live Site
            </a>
          </p>
          <div className='github-repos'>
            <div>
              <a href='https://github.com/thinkful-ei18/for_the_win_client'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to client repo' />
              </a>
              <a href='https://github.com/thinkful-ei18/for_the_win_server'
                target='_blank'
                rel='noopener noreferrer' >
                  <img className='github-icon'
                    src={require('../../images/github_icon.png')} 
                    alt='link to server repo' />
              </a>
            </div>
            <div>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/for_the_win_client' > 
                  Client 
              </a>
              <a className='github-repo-link'
                href='https://github.com/thinkful-ei18/for_the_win_server' > 
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
