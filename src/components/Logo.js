import React, { Component } from 'react'

import './logo.css'

export default class Logo extends Component {
  render() {

    return (
      <div className='logo-component'>
        <div className='name'>
          <p className='first-name'>alisha</p>
          <p className='middle-name'>antoinette</p>
        </div>
        <div className='title'>
          <p className='job-description'> full stack web developer && brand identity designer </p>
        </div>
      </div>
    )

  }

}