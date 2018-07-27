import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/intro.css';

export default class Intro extends Component {
  
  render() {

    let size = window.innerWidth;
    let query;

    if (size< 576) {
      query='extra-small';
    }
    else if (size< 576) {
      query='small';
    }
    else if (size< 576) {
      query='medium';
    }
    else if (size< 576) {
      query='large';
    }
    else if (size< 576) {
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