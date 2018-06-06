import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './dev.css';


export default class ForTheWin extends Component {
  constructor() {
    super();
    this.state = {
      close: false
    }
  }

  render() {
    if (this.state.close) {
      return <Redirect to='/' />
    }

    return (
      <div className='project-component'>
        <p className='close-portfolio'
          onClick={() => this.setState({ close: true})} > 
            X
        </p>

          <div className='portfolio-project'>
            <div className='opening-sequence'>
              <a className='photo-link'
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'>
                  <img className='project-responsive-mock'
                  src={require('../../images/portfolio/ftw_responsive.png')} 
                  alt='For The Win Mockup' />
              </a>
              <div className='description-block'>
                <a className='project-title'
                  href='https://for-the-win-app.netlify.com/'
                  target='_blank'
                  rel='noopener noreferrer'> 
                    For The Win 
                </a>
              </div>
            </div>
            <p className='project-services'> FULL STACK DEVELOPMENT • UI/UX DESIGN </p>
            <div className='desktop-only'>
              <p className='project-summary'>
              Make or join a fantasy basketball league (up to 5 members) and keep up with the stats of your favorite basketball players. Once you register for a free account simply choose 10 players to be on your team and track their stats on the dashboard. Each occurence of an offensive or defensive stat counts as a single point towards the user's total score. I.E., if one of your players had (4) 2 point shots, (1) assist and (3) rebounds in their last game, their total score for that day would be 8 points.
              </p>
            </div>
            <p className='live-porfolio-par'>
              <a className='live-portfolio-link'
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer' >
                  View the Live Site
              </a>
            </p>
            <div className='github-repos'>
              <div>
                <a href='https://github.com/thinkful-ei18/for_the_win_client'
                  target='_blank'
                  rel='noopener noreferrer' >
                    <img className='github-icon'
                      src={require('../../images/github_icon.png')} 
                      alt='link to client repo' />
                </a>
                <a href='https://github.com/thinkful-ei18/for_the_win_server'
                  target='_blank'
                  rel='noopener noreferrer' >
                    <img className='github-icon'
                      src={require('../../images/github_icon.png')} 
                      alt='link to server repo' />
                </a>
              </div>
              <div>
                <a className='github-repo-link'
                  href='https://github.com/thinkful-ei18/for_the_win_client' > 
                    Client 
                </a>
                <a className='github-repo-link'
                  href='https://github.com/thinkful-ei18/for_the_win_server' > 
                    Server 
                </a>
              </div>
            </div>
          </div>

      </div>
    )

  }
}
