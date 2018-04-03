import React, { Component } from 'react'

import './aboutMe.css'

export default class AboutMe extends Component {
  render() {

    return (
      <div className='about-me-component'>
        <h3 className='about-me-title'>ABOUT ME</h3>
        <div className='pic-div'>
          <img src={require('../images/profile_pic.jpg')} alt='headshot' className='personal-pic' />
        </div>
        <div className='about-me-div'>
          <h4>Hello!</h4>
          <p className='about-me-text'> I'm a full stack web developer with an M.F.A. in Media Design currently living in San Diego, CA. I'm also a Christian, logophile, sports fan, brain games aficionado && photographer. </p>
          <p className='about-me-text'>Please feel free to reach out to me via the methods below! </p>
        </div>
      </div>
    )

  }
}