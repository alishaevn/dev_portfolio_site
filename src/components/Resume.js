import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/caseStudies.css';

export default class Resume extends Component {

  render() {
    let title = this.props.match.path === '/resume'
      ? 'RESUME'
      : ''

    return(
      <section className='resume'>
        <Header 
          title={title} />
        
        <Contact />
        
      </section>
    )
  }
}