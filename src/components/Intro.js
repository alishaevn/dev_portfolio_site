import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/intro.css';

export default class Intro extends Component {
  
  render() {

    let size = window.innerWidth;
    let query;

    if (size < 576) {
      query='extra-small';
    }
    else if (size > 576 && size < 768) {
      query='small';
    }
    else if (size > 768 && size < 992) {
      query='medium';
    }
    else if (size > 992 && size < 1200) {
      query='large';
    }
    else if (size > 1200) {
      query='extra-large';
    }

    return (
      <section className={query} id='intro'>
        <Navigation />

        <p className='intro-tagline'>Detail oriented, problem solving, <br />
        creative thinking</p>
        <h1 className='intro-title'>Front-End Developer</h1>
      </section>
    )

  }
}