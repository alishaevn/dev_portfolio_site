import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { SocialIcon } from 'react-social-icons';

import './footer.css'

export default class Footer extends Component {
  render() {

    const socialIconStyles = {
      height: 35,
      width: 35,
      marginRight: 5,
      marginLeft: 5
    }

    return (
      <section className='contact-component' id='footer'>
        <div className='bottom-menu'>
          <HashLink 
            to='/#home'
            smooth={true}
            className='menu-hashlink'> 
            HOME 
          </HashLink>
          <HashLink 
            to='/#portfolio'
            smooth={true}
            className='menu-hashlink'> 
            PORTFOLIO 
          </HashLink>
          <HashLink 
            to='/#about'
            smooth={true}
            className='menu-hashlink'>
            ABOUT
          </HashLink>
        </div>

        <div className='footer-social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='https://github.com/alishaantoinette' style={socialIconStyles} color='#5E548E' />
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
