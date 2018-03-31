import React, { Component } from 'react'

import './aboutMe.css'

export default class AboutMe extends Component {
  render() {

    return (
      <div className='about-me-component'>
        <div className='pic-div'>
          <img src={require('../images/IMG_7768.jpg')} alt='mountains' className='personal-pic' />
        </div>
        <div className='about-me-div'>
          <p className='about-me-text'>Experienced brand identity strategist and graphic designer endeavoring to transition into the role of a front end web developer. Skilled in several front and back end programming libraries and frameworks; I've also worked with clients to develop effective, creative solutions to enhance their brand. I possess superb verbal and written communication as well as critical thinking skills that are useful in client correspondence, team meetings and my work. As a collaborative worker I’m dedicated to mutual learning and growth; I’m a quick learner and appreciate a challenge. </p>
        </div>
      </div>
    )

  }
}