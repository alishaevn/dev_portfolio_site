import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

import './contact.css'

export default class Footer extends Component {
  render() {

    const socialIconStyles = {
      height: 30,
      width: 30,
      marginRight: 10,
      marginBottom: 10
    }

    return (
      <section className='contact-component'>
        <div className='social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='https://github.com/alishaevn' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='mailto:alieva.inc@gmail.com' style={socialIconStyles} color='#5E548E' />
        </div>
        <div className='copyright'>
          <p className='copyright-info'>© Copyright Alisha Antoinette Evans 2018.</p>
          <p className='copyright-info'>All Rights Reserved.</p>
        </div>
      </section>
    )

  }
}


/*
 Resources:
  - http://jaketrent.github.io/react-social-icons/
 */