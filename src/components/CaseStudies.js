import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/caseStudies.css';


export default class CaseStudies extends Component {
  render() {

    return (
      <section className='case-studies' id='case-studies'>
        <h1 className='cs-title'> 
          Case Studies </h1>
        <section className='cs-3x1'>
          <Link to='/safer'
            className='link project-one'>
            <img className='cs-mockup'
              src={require('../images/studies/safer_mockup.png')} 
              alt='Safer Mockup'/>
            <p className='cs-mockup-title'>
              SAFER </p> 
            </Link>
          <Link to='/foodiephonetics'
            className='link project-two'>
            <img className='cs-mockup'
              src={require('../images/studies/fp_mockup.png')} 
              alt='Foodie Phonetics Mockup'/>
            <p className='cs-mockup-title title-two'>
              FOODIE PHONETICS </p>
            </Link>
          <Link to='/forthewin'
            className='link project-three'>
            <img className='cs-mockup'
              src={require('../images/studies/ftw_mockup.png')} 
              alt='For The Win Mockup'/>
            <p className='cs-mockup-title'>
              FOR THE WIN </p>
            </Link>
          </section>
      </section>
    )

  }
}