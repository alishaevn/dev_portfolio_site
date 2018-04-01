import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

export default class Nav extends Component {
  render() {

    const socialIconStyles = {
      height: 30,
      width: 30,
      'margin-right': 8
    }

    return (
      <div className='nav-component'>
        <div className='social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' color='black' style={socialIconStyles} />
          <SocialIcon url='https://github.com/alishaevn' color='black' style={socialIconStyles} />
        </div>
        <div className='navigation-links'>
          <p>About Me</p>
          <p>Portfolio</p>
        </div>
      </div>
    )

  }
}


/*
 Resources:
  - http://jaketrent.github.io/react-social-icons/
  - <SocialIcons urls={urls} className='social-media-link' />
  - <SocialIcons urls={urls} color='black' style={socialIconStyles} />
 */