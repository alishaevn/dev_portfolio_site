import React, { Component } from 'react'

import Nav from './Nav'
import Logo from './Logo'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'


export default class Main extends Component {
  render() {

    return (
      <div className='main-component'>
        <Nav />
        <Logo />
        <Portfolio />
        <AboutMe />
      </div>
    )

  }

}
