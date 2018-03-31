import React, { Component } from 'react'
import { SocialIcons } from 'react-social-icons';

export default class Nav extends Component {
  render() {
    const urls=[
      'https://www.linkedin.com/in/alishaevans/',
      'https://github.com/alishaevn'
    ]

    return (
      <div className='nav-component'>
        <div className='social-media-icons'>
          <SocialIcons urls={urls} color='black' style={{ height: 5, width: 5 }} />
        </div>
        <div className='navigation-links'>
          <p>About Me</p>
          <p>Work</p>
        </div>
      </div>
    )

  }
}


/*
 Resources:
  - http://jaketrent.github.io/react-social-icons/
  - <SocialIcons urls={urls} className='social-media-link' />
 */