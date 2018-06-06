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

          <li className='project-one' >
              <img className='portfolio-responsive-mock'
                onClick={() => this.setState({ project: 'safer'})}
                src={require('../images/portfolio/safer_responsive.png')} 
                alt='safeR Mockup' />
              <p className='portfolio-project-title'
                onClick={() => this.setState({ project: 'safer'})} > 
                  safeR 
              </p> 
              <p className='portfolio-services'> 
                FULL STACK DEVELOPMENT • UI/UX DESIGN • REACT NATIVE </p>
              <p className='project-tagline'>
                Stay safer by staying up to date on local crimes & incidents in the area.
              </p>
          </li>


          <li className='project-two' >
            <img className='portfolio-responsive-mock'
              onClick={() => this.setState({ project: 'foodiephonetics'})}
              src={require('../images/portfolio/fp_responsive.png')} 
              alt='Foodie Phonetics Mockup' />
            <p className='portfolio-project-title'
              onClick={() => this.setState({ project: 'foodiephonetics'})}> 
                Foodie Phonetics 
            </p>
            <p className='portfolio-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN </p>
            <p className='project-tagline'>
                Learn to say common food items in French!
            </p>
          </li>

          
          <li className='project-three' >
            <img className='portfolio-responsive-mock'
              onClick={() => this.setState({ project: 'forthewin'})}
              src={require('../images/portfolio/ftw_responsive.png')} 
              alt='For The Win Mockup' />
            <p className='portfolio-project-title'
              onClick={() => this.setState({ project: 'forthewin'})} > For The Win </p>
            <p className='portfolio-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN </p>
            <p className='project-tagline'>
              The basketball enthusiast's preferred fantasy basketball league and stat tracker.
            </p>
          </li>

        </ul>

        <ul className='row-two' >

          <li className='project-four'
            onClick={() => this.setState({ project: '69th'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/69th_mockup.png')} 
                alt='69th CoC Mockup' />
            <p className='portfolio-project-title'> 69th Street </p>
            <p className='portfolio-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>
          </li>


          <li className='project-five'
            onClick={() => this.setState({ project: 'ncss'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/ncss_mockup.png')} 
                alt='NCSS Mockup' />
            <p className='portfolio-project-title'> NCSS </p>
            <p className='portfolio-services'> VISUAL BRAND IDENTITY • PRINT DESIGN </p>
          </li>

          
          <li className='project-six'
            onClick={() => this.setState({ project: 'freshmarket'})} >
              <img className='portfolio-responsive-mock'
                src={require('../images/portfolio/frsh_mkt_mockup.png')} 
                alt='Fresh Market Mockup' />
            <p className='portfolio-project-title'> Fresh Market </p>
            <p className='portfolio-services'> VISUAL BRAND IDENTITY • PRINT DESIGN • PHOTOGRAPHY </p>
          </li>

        </ul>
      </div>
    )

  }
}
