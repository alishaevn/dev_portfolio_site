import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './dev.css';


export default class Safer extends Component {
  constructor() {
    super();
    this.state = {
      close: false
    }
  }

  render() {
    if (this.state.close) {
      return <Redirect to='/' />
    } 

    return (
      <div className='project-component'>
        <p className='close-portfolio'
          onClick={() => this.setState({ close: true})} > 
            X
        </p>

          <div className='portfolio-project'>
            <div className='opening-sequence'>
              <a className='photo-link'
                href='https://safer.netlify.com/'
                target='_blank'
                rel='noopener noreferrer' >
                <img className='project-responsive-mock'
                  src={require('../../images/portfolio/safer_responsive.png')} 
                  alt='safeR Mockup' />
              </a>
              <div className='description-block'>
                <a className='project-title'
                  href='https://safer.netlify.com/' 
                  target='_blank'
                  rel='noopener noreferrer' > 
                  safeR 
                </a>
                <p className='project-tagline'>
                  Stay safer by staying up to date on local crimes & incidents in the area.
                </p>
              </div>
            </div>
            <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN • REACT NATIVE </p>
            <div className='desktop-only'>
              <p className='project-summary'>
              SafeReport/safeR is an app that aims to keep the community safer by making sure they are up to date on local crimes or incidents in the area. When the app loads the user is greeted with a map with reports pinned in their local area. If the user chooses to sign up and login, they can submit a report or view the dashboard for previous reports they submitted themselves.
              </p>
              {/* <img className='project-responsive-mock-2'
                src={require('../../images/portfolio/safer_responsive.png')}
                alt='safeR Mockup' /> */}
            </div>
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
    )

  }
}
