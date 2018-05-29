import React, { Component } from 'react'

import './portfolio.css'


export default class Portfolio extends Component {
  render() {

    return (
      <div className='portfolio-component' id='portfolio'>
        <h3 className='portfolio-title'>PORTFOLIO</h3>
        <div className='row-one' >

          <div className='project-one'>
            <a href='https://safer.netlify.com/'
              target='_blank'
              rel='noopener noreferrer' >
              <img src={require('../images/portfolio/safer_responsive.png')} alt='safeR Mockup' className='portfolio-responsive-mock' />
            </a>
            <a href='https://safer.netlify.com/' 
              className='portfolio-project-title'
              target='_blank'
              rel='noopener noreferrer' > 
              safeR 
            </a>
            <p className='portfolio-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN • REACT NATIVE </p>
            <p className='portfolio-project-tagline'>
              Stay safer by staying up to date on local crimes & incidents in the area.
            </p>
            <p className='live-porfolio-par'>
              <a
                href='https://safer.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='live-portfolio-link'
              >View the Live Site
              </a>
            </p>
            <div className='github-repos'>
              <div>
                <a
                  href='https://github.com/thinkful-ei18/maajac-client'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to client repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/majaac-server'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to server repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/MOBILE-maajac-client'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to mobile repo' className='github-icon' />
                </a>
              </div>
              <div>
                <a href='https://github.com/thinkful-ei18/maajac-client'
                  className='github-repo-link' > 
                  Client 
                </a>
                <a href='https://github.com/thinkful-ei18/majaac-server' 
                  className='github-repo-link'> 
                  Server 
                </a>
                <a href='https://github.com/thinkful-ei18/MOBILE-maajac-client' 
                  className='github-repo-link'> 
                  Mobile 
                </a>
              </div>
            </div>
          </div>


          <div className='project-two'>
            <a href='https://foodiephonetics.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={require('../images/portfolio/fp_responsive.png')} alt='Foodie Phonetics Mockup' className='portfolio-responsive-mock' />
            </a>
            <a href='https://foodiephonetics.netlify.com/' 
              className='portfolio-project-title'
              target='_blank'
              rel='noopener noreferrer' > 
              Foodie Phonetics 
            </a>
            <p className='portfolio-services'>FULL STACK DEVELOPMENT • UI/UX DESIGN</p>
            <p className='portfolio-project-tagline'>
              Learn to say common food items in French using a spaced repetition algorithm.
            </p>
            <p className='live-porfolio-par'>
              <a
                href='https://foodiephonetics.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='live-portfolio-link'
              >View the Live Site
              </a>
            </p>
            <div className='github-repos'>
              <div>
                <a
                  href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to client repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to server repo' className='github-icon' />
                </a>
              </div>
              <div>
                <a href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client'
                  className='github-repo-link'> 
                  Client 
                </a>
                <a href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server'
                  className='github-repo-link'> 
                  Server 
                </a>
              </div>
            </div>
          </div>

          
          <div className='project-three'>
            <a href='https://for-the-win-app.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={require('../images/portfolio/ftw_responsive.png')} alt='For The Win Mockup' className='portfolio-responsive-mock' />
              </a>
            <a href='https://for-the-win-app.netlify.com/' 
              className='portfolio-project-title'
              target='_blank'
              rel='noopener noreferrer'> 
              For The Win 
            </a>
            <p className='portfolio-services'>FULL STACK DEVELOPMENT • UI/UX DESIGN</p>
            <p className='portfolio-project-tagline'>
              The basketball enthusiast's preferred fantasy basketball league and stat tracker.
            </p>
            <p className='live-porfolio-par'>
              <a
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='live-portfolio-link'
              >View the Live Site
              </a>
            </p>
            <div className='github-repos'>
              <div>
                <a
                  href='https://github.com/thinkful-ei18/for_the_win_client'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to client repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/for_the_win_server'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../images/github_icon.png')} alt='link to server repo' className='github-icon' />
                </a>
              </div>
              <div>
                <a href='https://github.com/thinkful-ei18/for_the_win_client'
                  className='github-repo-link'> 
                  Client 
                </a>
                <a href='https://github.com/thinkful-ei18/for_the_win_server'
                  className='github-repo-link'> 
                  Server 
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )

  }
}
