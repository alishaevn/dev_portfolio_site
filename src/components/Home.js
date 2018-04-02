import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'
import smoothscroll from 'smoothscroll-polyfill'

import './home.css'

smoothscroll.polyfill();

export default class Home extends Component {
  
  render() {
    
    return (
      <div className='home-component'>
        <div className='name'>
          <p className='first-name'>alisha</p>
          <p className='middle-name'>antoinette</p>
        </div>
        <div className='title'>
          <p className='job-description'> full stack web developer </p>
        </div>
        <button className='to-portfolio-btn'>
          <HashLink 
            to='/#portfolio' 
            smooth={true}
            className='to-portfolio-hashlink'>
          portfolio
          </HashLink>
        </button>
      </div>
    )

  }
}

/*
  * https://github.com/rafrex/react-router-hash-link
 */