import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import './portfolio.css'

export default class Portfolio extends Component {
  render() {

    return (
      <div className='portfolio-component' id='portfolio'>
        <h3 className='portfolio-title'>PORTFOLIO</h3>
        <div className='row-one' >
          <div className='project-one'>
            <img src={require('../images/FTW_Mock.png')} alt='For The Win Mockup' className='ftw-mock' />
            <h5>
              <a 
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='portfolio-project-name'
                >For The Win</a>
            </h5>
            <p className='portfolio-project-description'>The basketball enthusiast's favorite way to track stats for their favorite players.</p>
          </div>
        </div>
      </div>
    )

  }
}