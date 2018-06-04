import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../portfolio.css'


export default class ForTheWin extends Component {
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
      <div className='portfolio-component'>
        <p className='close-portfolio'
          onClick={() => this.setState({ close: true})} > 
            X
        </p>
        <div className='row-one' >

          <div className='project-three'>
            <a href='https://for-the-win-app.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={require('../../images/portfolio/ftw_responsive.png')} alt='For The Win Mockup' className='portfolio-responsive-mock' />
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
                  <img src={require('../../images/github_icon.png')} alt='link to client repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/for_the_win_server'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../../images/github_icon.png')} alt='link to server repo' className='github-icon' />
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
