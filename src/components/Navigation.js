import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HashLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';

import '../styles/navigation.css';

smoothscroll.polyfill();

export default class Navigation extends Component {

  render() {
    let size = window.innerWidth;

    return( 
      <nav>
        {/* <p className='logo'>A</p> */}

        {/* mobile menu */}
				{ size < 992
            ? (<div>
                <Menu right>
                  <a className='link menu-link' href='/'>home</a>
                  <a className='link menu-link' href='/safer'>safer</a>
                  <a className='link menu-link' href='foodiephonetics'>foodie phonetics</a>
                  <a className='link menu-link' href='/forthewin'>for the win</a>
                  <a className='link menu-link' href='/identity'>identity design</a>
                  <a className='link menu-link' href='/photos'>photography</a>
                  <a className='link menu-link' href='/resume'>resume</a>
                  </Menu>
                </div>)

          /* desktop menu */
            : (<div className="dropdown-menu">
                <HashLink 
                  to='#intro'
                  smooth={true}
                  className='menu-link'> 
                  home 
                </HashLink>
                <HashLink 
                  to='#about'
                  smooth={true}
                  className='menu-link'> 
                  about 
                </HashLink>
                <HashLink 
                  to='#case-studies'
                  smooth={true}
                  className='menu-link'>
                  case studies
                </HashLink>
                <HashLink
                  to='#contact'
                  smooth={true}
                  className='menu-link'>
                  contact
                </HashLink>
                <HashLink
                  to='/photos'
                  smooth={true}
                  className='menu-link'>
                  photography
                </HashLink>
                <HashLink
                  to='/identity'
                  smooth={true}
                  className='menu-link'>
                  identity design
                </HashLink>
                <HashLink
                  to='/resume'
                  smooth={true}
                  className='menu-link'>
                  resume
                </HashLink>
              </div>) }
      </nav>
    )
  }
}

/*
  Resources:
  - https://github.com/rafrex/react-router-hash-link
  - https://github.com/negomi/react-burger-menu
 */