import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/css/resume.css';

export default class Resume extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    let title = this.props.match.path === '/resume'
      ? 'RESUME'
      : ''

    return(
      <section>
        <Header 
          title={title} />
        <img className='resume'
          src={require('../images/AlishaEvansDevResume.jpg')}
          alt='Alisha Evans Resume' />
        <Contact />
        
      </section>
    )
  }
}