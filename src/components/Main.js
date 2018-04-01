import React, { Component } from 'react'

import Home from './Home'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Contact from './Contact'


export default class Main extends Component {
  render() {

    return (
      <div className='main-component'>
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
      </div>
    )

  }

}
