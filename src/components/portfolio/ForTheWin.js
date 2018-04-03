import React, { Component } from 'react'

// import './portfolioProjects.css'

export default class ForTheWin extends Component {
  render() {

    return (
      <div className='portfolio-project-component'>
        <h1 className='portfolio-project-title-div'>For The Win</h1>

        <div className='portfolio-project-row-one'>
          <div className='portfolio-project-info-div'>
            <p className='portfolio-project-description'>
              The basketball enthusiast's favorite way to track stats for their favorite players.
            </p>
            <h3>
              <a
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='portfolio-project-link'
              >For The Win</a>
            </h3>
          </div>
          <img 
            src={require('../../images/portfolio/ftw_mock.png')} 
            alt='for the win desktop app' 
            className='portfolio-project-main-image' 
          />
        </div>

        <div className='portfolio-project-row-two'>
          <img 
            src={require('../../images/portfolio/ftw_responsive.png')} 
            alt='for the win responsive versions' 
            className='portfolio-project-responsive-image' 
          />
          <p className='portfolio-project-stack'>
            Tech stack: Mongo, Express, Passport, Node, React, Redux, CSS
          </p>
        </div>

        <div className='portfolio-project-row-three'>
        </div>
      </div>
    )

  }
}
