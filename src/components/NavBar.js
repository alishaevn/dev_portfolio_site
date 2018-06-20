import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';

import './navbar.css';

smoothscroll.polyfill();


export default class NavBar extends Component {
  constructor() {
		super();

		this.state = {
			showMenu: false,
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();

		this.setState({ showMenu: true }, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu() {
		this.setState({ showMenu: false }, () => {
			document.removeEventListener('click', this.closeMenu);
		});
	}

  render() {

    return( 
      <nav>
          { this.state.showMenu
            ? (
              <button className='menu-button-clicked' onClick={this.showMenu}>
            X
          </button>
            )
            : (
              <button className='menu-button' onClick={this.showMenu}>
            &#9776;
          </button>
            )
          }
          { this.state.showMenu 
            ? (
						<div className="dropdown-menu">
							<HashLink 
                to="/#portfolio"
                smooth={true}
                className='menu-hashlink'> 
                PORTFOLIO 
              </HashLink>
							<HashLink 
                to="/#about"
                smooth={true}
                className='menu-hashlink'>
                ABOUT
              </HashLink>
              <a className='menu-hashlink'
                href='https://www.linkedin.com/in/alishaevans/'
                alt='LinkedIn'
                target='blank' >
                LINKEDIN
              </a>
              <a className='menu-hashlink'
                href='https://github.com/alishaantoinette'
                alt='Github'
                target='blank' >
                GITHUB
              </a>
              <a className='menu-hashlink'
                href='mailto:alieva.inc@gmail.com'
                alt='Email' >
                EMAIL
              </a>
						</div>
					) 
          : null }
          <div className="navigation">
							<HashLink 
                to="/#portfolio"
                smooth={true}
                className='menu-hashlink'> 
                PORTFOLIO 
              </HashLink>
							<HashLink 
                to="/#about"
                smooth={true}
                className='menu-hashlink'>
                ABOUT
              </HashLink>
              <a className='menu-hashlink'
                href='https://www.linkedin.com/in/alishaevans/'
                alt='LinkedIn'
                target='blank' >
                LINKEDIN
              </a>
              <a className='menu-hashlink'
                href='https://github.com/alishaantoinette'
                alt='Github'
                target='blank' >
                GITHUB
              </a>
              <a className='menu-hashlink'
                href='mailto:alieva.inc@gmail.com'
                alt='Email' >
                EMAIL
              </a>
						</div>
        </nav>
    )
  }
}