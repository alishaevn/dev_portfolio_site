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
              Make or join a fantasy basketball league (up to 5 members) and keep up with the stats of your favorite basketball players! Once you register for a free account simply choose 10 players to be on your team and track their stats on the dashboard. Each occurence of an offensive or defensive stat counts as a single point towards the user's total score. 
            </p>
            <a className='photo-link'
              href='https://for-the-win-app.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
                <img className='project-responsive-mock'
                src={require('../../images/portfolio/FTW/ftw_responsive.png')} 
                alt='For The Win Mockup' />
            </a>
          </section>
          <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN </p>

          <section className='project-details'>
            <div className='info-box'>
              <h2 className='project-heading'> Why </h2>
              <p className='project-info'>
                I'm a basketball fan so I desired to make a fantasy basketball league. The app does more than allow you to join a league, you can also view all games for that day as well as track who's winning in the league on the user's dashboard.
              </p>
            </div>
            <div className='info-box'>
              <h2 className='project-heading'> My Role </h2>
              <p className='project-info'>
                This app was a solo project and my MVP was completed in 2 weeks. About a month later I did go back to add more functionality and change up some design aspects.
              </p>
            </div>
          </section>
          <div className='photo-bank'>
            <img className='project-photos-row'
              src={require('../../images/portfolio/FTW/ftw_01.png')} 
              alt='For The Win Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/FTW/ftw_02.png')} 
              alt='For The Win Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/FTW/ftw_03.png')} 
              alt='For The Win Mockup' />
            <img className='project-photos-row'
              src={require('../../images/portfolio/FTW/ftw_04.png')} 
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
