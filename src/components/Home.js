import React, { Component } from 'react';

import Intro from './Intro';
import About from './About';
import CaseStudies from './CaseStudies';
import Contact from './Contact';

export default class Home extends Component {
  
  render() {

    return (
      <section className='home' id='home'>
        <Intro />
        <About />
        <CaseStudies />
        <Contact />
      </section>
    )
  }
}