import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/caseStudies.css';


export default class CaseStudies extends Component {
  render() {

    return (
      <section className='case-studies' id='case-studies'>
        <h1 className='cs-title'> 
          Case Studies </h1>
        <section className='cs-2x2'>
          <Link to='/safer'
            className='link'>
            <img className='cs-mockup project-one'
              src={require('../images/studies/safer_mockup.png')} 
              alt='Safer Mockup'/>
            <p className='cs-mockup-title'>
              SAFER </p> 
            </Link>
        </section>
        <section className='cs-2x2'>
          <Link to='/foodiephonetics'
            className='link'>
            <img className='cs-mockup project-two'
              src={require('../images/studies/fp_mockup.png')} 
              alt='Foodie Phonetics Mockup'/>
            <p className='cs-mockup-title title-two'>
              FOODIE PHONETICS </p>
            </Link>
          <Link to='/forthewin'
            className='link'>
            <img className='cs-mockup project-three'
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