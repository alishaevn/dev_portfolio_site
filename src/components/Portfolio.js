import React, { Component } from 'react'

import './portfolio.css'


export default class Portfolio extends Component {
  render() {

    return (
      <div className='portfolio-component' id='portfolio'>
        <h3 className='portfolio-title'>PORTFOLIO</h3>
        <div className='row-one' >

          <div className='project-one'>
            <img src={require('../images/portfolio/ftw_responsive.png')} alt='For The Win Mockup' className='portfolio-responsive-mock' />
            <p className='portfolio-project-title'>For The Win</p>
            <p className='portfolio-services'>FULL STACK DEVELOPMENT • UI/UX DESIGN</p>
            <p className='portfolio-project-tagline'>
              The basketball enthusiast's preferred way to track stats for their favorite players.
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
            <p className='github-repo-par'>
              <a
                href='https://github.com/thinkful-ei18/for_the_win_client'
                target='_blank'
                rel='noopener noreferrer'
                className='github-repo-link'
              >Github Repo</a>
            </p>
          </div>

          <div className='project-two'>
            <img src={require('../images/portfolio/fp_responsive.png')} alt='Foodie Phonetics Mockup' className='portfolio-responsive-mock' />
            <p className='portfolio-project-title'>Foodie Phonetics</p>
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
            <p className='github-repo-par'>
              <a
                href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client'
                target='_blank'
                rel='noopener noreferrer'
                className='github-repo-link'
              >Github Repo</a>
            </p>
          </div>

        </div>
      </div>
    )

  }
}
