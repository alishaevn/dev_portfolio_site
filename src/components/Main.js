import React, { Component } from 'react'

import Nav from './Nav'
import Logo from './Logo'


export default class Main extends Component {
  render() {

    return (
      <div className='main-component'>
        <Nav />
        <Logo />
      </div>
    )

  }

}
