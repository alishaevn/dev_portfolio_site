import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'
import smoothscroll from 'smoothscroll-polyfill'
import { SocialIcon } from 'react-social-icons';

import './home.css'

smoothscroll.polyfill();

export default class Home extends Component {
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

    const socialIconStyles = {
      height: 35,
      width: 35,
      marginRight: 5,
      marginLeft: 5
    }

    // let style;
    // this.state.showMenu ? style = 'menu-button-clicked' : style = 'menu-button'
    
    return (
      <div className='home-component'>
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
              <HashLink 
                to="/#contact"
                smooth={true}
                className='menu-hashlink'>
                CONTACT
              </HashLink>
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
              <HashLink 
                to="/#contact"
                smooth={true}
                className='menu-hashlink'>
                CONTACT
              </HashLink>
						</div>
        </nav>

        <div className='name'>
          <p className='first-name'>alisha</p>
          <p className='middle-name'>antoinette</p>
        </div>
        <div className='title'>
          <p className='job-description'> full stack developer, brand identity designer & photographer</p>
        </div>
        {/* <button className='to-portfolio-btn'>
          <HashLink 
            to='/#portfolio' 
            smooth={true}
            className='to-portfolio-hashlink'>
          portfolio
          </HashLink>
        </button> */}
        <div className='home-social-media-icons'>
          <SocialIcon url='https://www.linkedin.com/in/alishaevans/' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='https://github.com/alishaantoinette' style={socialIconStyles} color='#5E548E' />
          <SocialIcon url='mailto:alieva.inc@gmail.com' style={socialIconStyles} color='#5E548E' />
        </div>
      </div>
    )

  }
}

/*
  Resources:
  - https://github.com/rafrex/react-router-hash-link
  - https://unicode-table.com/en/#2261
  - https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp
 */