import React, { Component } from 'react'

import './portfolioProjects.css'

export default class ForTheWin extends Component {
  render() {

    return (
      <div className='portfolio-project-component'>
        <h1 className='portfolio-project-title-div'>For The Win</h1>

        <div className='portfolio-project-row-one'>
          <div className='portfolio-project-info-div'>
            <p className='portfolio-project-tagline'>
              The basketball enthusiast's preferred way to track stats for their favorite players.
            </p>
            <p className='portfolio-project-description'>
              blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay blahzay 
            </p>
            <h5>
              <a
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='portfolio-project-link'
              >Live Site</a>
            </h5>
          </div>
          <img 
            src={require('../../images/portfolio/ftw_mock.png')} 
            alt='for the win desktop app' 
            className='portfolio-project-main-image' 
          />
        </div>

        <div className='portfolio-project-row-two'>
          <h4 className='tech-stack-header'>
            Tech:
          </h4>
          <ul className='portfolio-project-stack'>
            <li className='tech-stack-li'>Mongo</li>
            <li className='tech-stack-li'>Express</li>
            <li className='tech-stack-li'>Passport</li>
            <li className='tech-stack-li'>Node</li>
            <li className='tech-stack-li'>REST API</li>
            <li className='tech-stack-li'>React</li>
            <li className='tech-stack-li'>Redux</li>
            <li className='tech-stack-li'>CSS</li>
            <li className='tech-stack-li'>Responsive</li>
          </ul>
          <img
            src={require('../../images/portfolio/ftw_responsive.png')}
            alt='for the win responsive versions'
            className='portfolio-project-responsive-image'
          />
        </div>

        <div className='portfolio-project-row-three'>
        </div>

        <button className='back-to-home-button'>
          Home
        </button>
      </div>
    )

  }
}
