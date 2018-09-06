import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/css/header.css';


export default class Header extends Component {

  render() {
    let title = this.props.title ? 'header-title' : 'no-header-title'
    
    return(
      <section className='header'>
        <Navigation />
        <h1 className={title}>
          {this.props.title} </h1>
        <p className='header-tagline'>
          {this.props.tagline} </p>
      </section>
    )
  }
}