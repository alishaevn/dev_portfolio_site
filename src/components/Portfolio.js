import React, { Component } from 'react'

import './portfolio.css'

export default class Portfolio extends Component {
  render() {

    return (
      <div className='portfolio-component'>
        <div className='col-one' >
          <div className='project-one'>
            <img src={require('../images/FTW_Mock.png')} alt='For The Win Mockup' className='ftw-mock' />
            <h5>For The Win</h5>
            <p>The basketball enthusiast's favorite way to track stats for their favorite players.</p>
          </div>
        </div>
      </div>
    )

  }
}