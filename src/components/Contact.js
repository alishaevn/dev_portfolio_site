import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import './contact.css'

export default class Footer extends Component {
  render() {

    return (
      <section className='contact-component' id='contact'>
        <div className='bottom-menu'>
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
              <a className='menu-hashlink'
                href='https://www.linkedin.com/in/alishaevans/'
                alt='LinkedIn'
                target='blank' >
                LINKEDIN
              </a>
              <a className='menu-hashlink'
                href='https://github.com/alishaantoinette'
                alt='Github'
                target='blank' >
                GITHUB
              </a>
              <a className='menu-hashlink'
                href='mailto:alieva.inc@gmail.com'
                alt='Email' >
                EMAIL
              </a>
						</div>
        <div className='copyright'>
          <p className='copyright-info'>© Copyright Alisha Antoinette Evans 2018.</p>
          <p className='copyright-info'>All Rights Reserved.</p>
        </div>
      </section>
    )

  }
}
