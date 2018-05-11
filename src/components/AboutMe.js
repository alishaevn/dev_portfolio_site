import React, { Component } from 'react'

import './aboutMe.css'

export default class AboutMe extends Component {
  render() {

    return (
      <div className='about-me-component'>
        <h3 className='about-me-title'>ABOUT</h3>
        <div className='pic-div'>
          <img 
            src={require('../images/about_me_pic.png')} 
            alt='headshot' 
            className='personal-pic' 
          />
          <p className='personality'>
            I'm a full stack web developer with an M.F.A. in Media Design. 
            One of the most satisfying parts of being a developer is actualizing an idea. I look forward to being able to do that for future client's as I work with/learn from my team. 
            My desire for organized simplicity is evident in the way I write my code as well as the UI/UX choices that I make.
            I'm also a logophile with an affinity for lowercase; an athlete, coach & I play sudoku for fun.
          </p> 
        </div>
        <div className='about-me-div'>

          <div className='skillset-area'>
            <div className='skillset-div'>
              <p className='skillset-title'>
                Full Stack Web Development
              </p>
              <p className='skillset-text'>
                I prefer to write code using the MERN stack (MongoDB, Express, React & Node), but I'm always working on incorporating new technologies into my apps.
              </p>
            </div>
            <div className='skillset-div'>
              <p className='skillset-title'>
                UX/UI Design
              </p>
              <p className='skillset-text'>
                Familiar with designing wireframes & creating user personas in order to provide engaging, yet simplistic client interactions.
              </p>
            </div>
            <div className='skillset-div'>
              <p className='skillset-title'>
                Brand Identity & Strategy
              </p>
              <p className='skillset-text'>
                Experienced in working with clients to develop effective, creative solutions and strategies to enhance their brand.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    )

  }
}

/*
 <h4>Hello!</h4>
 
 <p className='about-me-text'> I'm a full stack web developer with an M.F.A. in Media Design currently living in San Diego, CA. I'm also a Christian, logophile, sports fan, brain games aficionado & photographer. </p>
          <p className='about-me-text'>Please feel free to reach out to me via the methods below! </p>
 */