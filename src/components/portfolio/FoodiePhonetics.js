import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../portfolio.css'


export default class FoodiePhonetics extends Component {
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

          <div className='project-two'>
            <a href='https://foodiephonetics.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={require('../../images/portfolio/fp_responsive.png')} alt='Foodie Phonetics Mockup' className='portfolio-responsive-mock' />
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
                  <img src={require('../../images/github_icon.png')} alt='link to client repo' className='github-icon' />
                </a>
                <a
                  href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={require('../../images/github_icon.png')} alt='link to server repo' className='github-icon' />
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

        </div>
      </div>
    )

  }
}
