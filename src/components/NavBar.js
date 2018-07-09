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
        {/* mobile menu */}
          { this.state.showMenu
            ? (
              <div>
                <button className='menu-button-clicked' onClick={this.showMenu}>
                  X
                </button>
                <div className="dropdown-menu">
                  <HashLink 
                    to="/"
                    smooth={true}
                    className='menu-hashlink'> 
                    HOME 
                  </HashLink>
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
                </div>
              </div>
            )
            : (
              <button className='menu-button' onClick={this.showMenu}>
            &#9776;
          </button>
            )
          }

          {/* desktop menu */}
          <div className="navigation">
              <HashLink 
                to="/"
                smooth={true}
                className='menu-hashlink'> 
                HOME 
              </HashLink>
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
						</div>
        </nav>
    )
  }
}