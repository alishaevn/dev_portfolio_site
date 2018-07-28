import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/header.css';


export default class Header extends Component {

  render() {

    return(
      <section className='header'>
        <Navigation />
        <h1 className='header-title'>
          {this.props.title} </h1>
        <p className='header-tagline'>
          {this.props.tagline} </p>
      </section>
    )
  }
}