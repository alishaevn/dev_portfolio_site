import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

import './contact.css'

export default class Footer extends Component {
  render() {

    const socialIconStyles = {
      height: 30,
      width: 30,
      marginRight: 10,
    }

    return (
      <div className='contact-component'>
        <div className='social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#E0B1CB' />
          <SocialIcon url='https://github.com/alishaevn' style={socialIconStyles} color='#E0B1CB' />
          <SocialIcon url='mailto:alieva.inc@gmail.com' style={socialIconStyles} color='#E0B1CB' />
        </div>
        <p className='copyright-info'>© Copyright Alisha Antoinette Evans 2018.</p>
        <p className='copyright-info'>All Rights Reserved.</p>
      </div>
    )

  }
}


/*
 Resources:
  - http://jaketrent.github.io/react-social-icons/
 */