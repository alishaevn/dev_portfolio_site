import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HashLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';

import '../styles/navigation.css';

smoothscroll.polyfill();

export default class Navigation extends Component {

  render() {

    return( 
      <nav>
        {/* <p className='logo'>A</p> */}

        {/* mobile menu */}
        <div className='mobile-menu'>
          <Menu 
            right 
            noOverlay >
            <a className='link menu-link' href='/'>home</a>
            <a className='link menu-link' href='/safer'>safer</a>
            <a className='link menu-link' href='foodiephonetics'>foodie phonetics</a>
            <a className='link menu-link' href='/forthewin'>for the win</a>
            <a className='link menu-link' href='/identity'>identity design</a>
            <a className='link menu-link' href='/photos'>photography</a>
            <a className='link menu-link' href='/resume'>resume</a>
            </Menu>
          </div>

        {/* desktop menu */}
        <div className='desktop-menu'>
          <HashLink 
            to='/'
            smooth={true}
            className='link menu-link'> 
            home 
          </HashLink>
          <HashLink 
            to='/safer'
            smooth={true}
            className='link menu-link'> 
            safer 
          </HashLink>
          <HashLink 
            to='/foodiephonetics'
            smooth={true}
            className='link menu-link'>
            foodie phonetics
          </HashLink>
          <HashLink
            to='/forthewin'
            smooth={true}
            className='link menu-link'>
            for the win
          </HashLink>
          <HashLink
            to='/identity'
            smooth={true}
            className='link menu-link'>
            identity design
          </HashLink>
          <HashLink
            to='/photos'
            smooth={true}
            className='link menu-link'>
            photography
          </HashLink>
          <HashLink
            to='/resume'
            smooth={true}
            className='link menu-link'>
            resume
          </HashLink>
        </div>
      </nav>
    )
  }
}

/*
  Resources:
  - https://github.com/rafrex/react-router-hash-link
  - https://github.com/negomi/react-burger-menu
 */