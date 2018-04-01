import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

import './footer.css'

export default class Footer extends Component {
  render() {

    const socialIconStyles = {
      height: 30,
      width: 30,
      'margin-right': 10,
    }

    return (
      <div className='footer-component'>
        <div className='social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#E0B1CB' />
          <SocialIcon url='https://github.com/alishaevn' style={socialIconStyles} color='#E0B1CB' />
        </div>
      </div>
    )

  }
}


/*
 Resources:
  - http://jaketrent.github.io/react-social-icons/
 */