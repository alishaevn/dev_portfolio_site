import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/caseStudies.css';


export default class CaseStudies extends Component {
  render() {

    return (
      <section className='case-studies' id='case-studies'>
        <h1 className='cs-title'> 
          Case Studies </h1>
        <Link to='/safer'
          className='link'>
          <img className='cs-mockup'
            src={require('../images/studies/safer_mockup.png')} 
            alt='Safer Mockup'/>
          <p className='cs-mockup-title'>
            SAFER </p> 
            </Link>
        <Link to='/foodiephonetics'
          className='link'>
          <img className='cs-mockup'
            src={require('../images/studies/fp_mockup.png')} 
            alt='Foodie Phonetics Mockup'/>
          <p className='cs-mockup-title'>
            FOODIE PHONETICS </p>
            </Link>
        <Link to='/forthewin'
          className='link'>
          <img className='cs-mockup'
            src={require('../images/studies/ftw_mockup.png')} 
            alt='For The Win Mockup'/>
          <p className='cs-mockup-title'>
            FOR THE WIN </p>
            </Link>
        
      </section>
    )

  }
}