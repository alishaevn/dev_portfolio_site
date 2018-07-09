import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './portfolio.css';


export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      project: null
    }
  }

  render() {

    return (
      <div className='portfolio-component' id='portfolio'>
        { this.state.project ? <Redirect to={this.state.project} /> : '' }
        <h3 className='portfolio-title'> PORTFOLIO </h3>
        <ul className='row-one' >

          <li className='project-one'
            onClick={() => this.setState({ project: 'safer'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/safeR/safer_responsive.png')} 
                alt='safeR Mockup' />
              <p className='portfolio-project-title'> safeR </p> 
          </li>

          <li className='project-two'
            onClick={() => this.setState({ project: 'foodiephonetics'})} >
            <img className='portfolio-responsive-mock'
              src={require('../images/portfolio/foodie/fp_responsive.png')} 
              alt='Foodie Phonetics Mockup' />
            <p className='portfolio-project-title' > Foodie Phonetics </p>
          </li>

          <li className='project-three'
            onClick={() => this.setState({ project: 'forthewin'})} >
            <img className='portfolio-responsive-mock'
              src={require('../images/portfolio/FTW/ftw_responsive.png')} 
              alt='For The Win Mockup' />
            <p className='portfolio-project-title'> For The Win </p>
          </li>

        </ul>

        <ul className='row-two' >

          <li className='project-four'
            onClick={() => this.setState({ project: 'ncss'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/ncss/ncss_mockup.png')} 
                alt='NCSS Mockup' />
            <p className='portfolio-project-title'> NCSS </p>
          </li>

          <li className='project-five'
            onClick={() => this.setState({ project: '69th'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/69th/69th_mockup.png')} 
                alt='69th CoC Mockup' />
            <p className='portfolio-project-title'> 69th Street CoC </p>
          </li>
          
          <li className='project-six'
            onClick={() => this.setState({ project: 'freshmarket'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/TFM/frsh_mkt_mockup.png')} 
                alt='Fresh Market Mockup' />
            <p className='portfolio-project-title'> Fresh Market </p>
          </li>

        </ul>
      </div>
    )

  }
}
