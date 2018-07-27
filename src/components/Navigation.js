import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();


export default class Navigation extends Component {
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

        {/* desktop menu */}
       
      </nav>
    )
  }
}