import React, { Component } from 'react'

import '../portfolio.css'


export default class Safer extends Component {
  render() {

    return (
      <div className='portfolio-component'>
        <div className='row-one' >

          <div className='project-one'>
            <a href='https://safer.netlify.com/'
              target='_blank'
              rel='noopener noreferrer' >
              <img src={require('../../images/portfolio/safer_responsive.png')} alt='safeR Mockup' className='portfolio-responsive-mock' />
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
                  <img src={require('../../images/github_icon.png')} alt='link to client repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/majaac-server'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../../images/github_icon.png')} alt='link to server repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/MOBILE-maajac-client'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../../images/github_icon.png')} alt='link to mobile repo' className='github-icon' />
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

        </div>
      </div>
    )

  }
}
