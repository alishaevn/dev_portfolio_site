import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

import '../styles/contact.css';


export default class Contact extends Component {
  render() {

    const socialIconStyles = {
      height: 40,
      width: 40,
      marginRight: 8,
      marginLeft: 8,
      marginTop: 25,
      marginBottom: 25
    }

    return (
      <footer className='contact' id='contact'>
        <h3 className=''>
          I’d love to hear from you about employment, networking or mentorship opportunities! </h3>
        <p className='resume'>
          Feel free to view my <Link to='resume' className='link contact-link'>resume</Link>.</p>
        <p className='contact-info'>
          Send me an <a href='mailto:alieva.inc@gmail.com' className='link contact-link'>email</a>, 
          chat with me on <a href='https://twitter.com/thatgirlt0nii' className='link contact-link'>Twitter</a>,
          connect with me on <a href='https://www.linkedin.com/in/alishaevans/' className='link contact-link'>LinkedIn </a> 
          or view my <a href='https://github.com/alishaantoinette' className='link contact-link'>Github</a>.
        </p>

        <div className='social-media-icons'>
          <SocialIcon url='mailto:alieva.inc@gmail.com' style={socialIconStyles} color='#2C8199' />
          <SocialIcon url='https://twitter.com/thatgirlt0nii' style={socialIconStyles} color='#2C8199' />
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#2C8199' />
          <SocialIcon url='https://github.com/alishaantoinette' style={socialIconStyles} color='#2C8199' />
        </div>

        <h3 className='copyright-info'>
          © Alisha A. Evans 2018.</h3>
      </footer>
    )
  }
}

/*
  Resources:
  - http://jaketrent.github.io/react-social-icons/
 */