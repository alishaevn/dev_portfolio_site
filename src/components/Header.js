import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/css/header.css';


export default class Header extends Component {

  render() {
    let size = this.props.size ? this.props.size : 'header'
    
    return(
      <section className={size}>
        <Navigation />
        <h1 className='header-title'>
          {this.props.title} </h1>
        <p className='header-tagline'>
          {this.props.tagline} </p>
      </section>
    )
  }
}