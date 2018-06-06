import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './dev.css';


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
      <div className='project-component'>
        <p className='close-portfolio'
          onClick={() => this.setState({ close: true})} > 
            X
        </p>

          <div className='portfolio-project'>
            <div className='opening-sequence'>
              <div className='description-block'>
              <a className='project-title'
                href='https://foodiephonetics.netlify.com/' 
                target='_blank'
                rel='noopener noreferrer' > 
                  Foodie Phonetics 
              </a>
              </div>
              <a className='photo-link'
                href='https://foodiephonetics.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'>
                  <img className='project-responsive-mock'
                    src={require('../../images/portfolio/fp_responsive.png')}
                    alt='Foodie Phonetics Mockup' />
              </a>
            </div>
            <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN </p>
            <div className='desktop-only'>
              <p className='project-summary'>
              Using a spaced repetition algorithm, Foodie Phonetics teaches the user how to say the most common food items in their language of choice. Each time the user gets a question correct, that question is moved farther back in a singly linked list. If the user gets a question incorrect, it will be moved to the top of the list instead.
              </p>
            </div>
            <p className='live-porfolio-par'>
              <a className='live-portfolio-link'
                href='https://foodiephonetics.netlify.com/'
                target='_blank'
                rel='noopener noreferrer' >
                  View the Live Site
              </a>
            </p>
            <div className='github-repos'>
              <div>
                <a href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client'
                  target='_blank'
                  rel='noopener noreferrer' >
                    <img className='github-icon'
                      src={require('../../images/github_icon.png')} 
                      alt='link to client repo' />
                </a>
                <a href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server'
                  target='_blank'
                  rel='noopener noreferrer' >
                    <img className='github-icon'
                      src={require('../../images/github_icon.png')} 
                      alt='link to server repo' />
                </a>
              </div>
              <div>
                <a className='github-repo-link'
                  href='https://github.com/thinkful-ei18/Alisha_Brian_SpacedRep_Client' > 
                    Client 
                </a>
                <a className='github-repo-link'
                  href='https://github.com/thinkful-ei18/alisha_brian_spacedRep_server' > 
                    Server 
                </a>
              </div>
            </div>
          </div>

      </div>
    )

  }
}
