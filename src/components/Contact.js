import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Contact extends Component {
  render() {

    const socialIconStyles = {
      height: 35,
      width: 35,
      marginRight: 5,
      marginLeft: 5
    }

    return (
      <footer className='contact' id='contact'>

        <div className='footer-social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='https://github.com/alishaantoinette' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='mailto:alieva.inc@gmail.com' style={socialIconStyles} color='#5E548E' />
        </div>


          <p className='copyright-info'>© Copyright Alisha A. Evans 2018.</p>
      </footer>
    )

  }
}
