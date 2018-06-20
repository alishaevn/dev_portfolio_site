import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import NavBar from './NavBar';

import './home.css'


export default class Home extends Component {
  
  render() {

    const socialIconStyles = {
      height: 35,
      width: 35,
      marginRight: 5,
      marginLeft: 5
    }

    return (
      <div className='home-component'>
        <NavBar />

        <div className='name'>
          <p className='first-name'>alisha</p>
          <p className='middle-name'>antoinette</p>
        </div>
        <div className='title'>
          <p className='job-description'> full stack developer, brand identity designer & photographer</p>
        </div>
        <div className='home-social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='https://github.com/alishaantoinette' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='mailto:alieva.inc@gmail.com' style={socialIconStyles} color='#5E548E' />
        </div>
      </div>
    )

  }
}

/*
  Resources:
  - https://github.com/rafrex/react-router-hash-link
  - https://unicode-table.com/en/#2261
  - https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp
  - http://jaketrent.github.io/react-social-icons/
 */