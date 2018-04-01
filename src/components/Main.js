import React, { Component } from 'react'

import Footer from './Footer'
import Logo from './Logo'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'


export default class Main extends Component {
  render() {

    return (
      <div className='main-component'>
        <Logo />
        <Portfolio />
        <AboutMe />
        <Footer />
      </div>
    )

  }

}
