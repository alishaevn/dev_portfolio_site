import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/caseStudies.css';

export default class ForTheWin extends Component {

  render() {
    let title;
    let tagline;

    if (this.props.match.path === '/forthewin') {
      title='FOR THE WIN';
      tagline='FULL STACK DEVELOPMENT • UI/UX DESIGN'
    }

    return (
      <section className='for-the-win'>
        <Header 
          title={title}
          tagline={tagline} />
          <aside className='project-info'>
            <img className='dev-mockup'
              src={require('../images/studies/ftw_mockup.png')} 
              alt='For The Win Mockup'/>
            <section>
              <p className='project-summary'>
                Make or join a fantasy basketball league (up to 5 members) and keep up with the stats of your favorite basketball players! Once you register for a free account simply choose 10 players to be on your team and track their stats on the dashboard. Each occurence of an offensive or defensive stat counts as a single point towards the user's total score. 
                <br /><br />
                Username: demo@gmail.com <br />
                Password: demo12345</p>
              <div className='project-details'>
                <h3 className='view-website'>
                  <a className='link live-portfolio-link'
                    href='https://for-the-win-app.netlify.com/'
                    target='_blank'
                    rel='noopener noreferrer' >
                      View Website</a>
                  </h3>
                <div className='github-repos'>
                  <div>
                    <a href='https://github.com/thinkful-ei18/for_the_win_client'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to client repo' />
                      </a>
                    <a href='https://github.com/thinkful-ei18/for_the_win_server'
                      target='_blank'
                      rel='noopener noreferrer' >
                        <img className='github-icon'
                          src={require('../images/icon-github.png')} 
                          alt='link to server repo' />
                      </a>
                  </div>
                  <div>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/for_the_win_client' > 
                        Client 
                      </a>
                    <a className='link github-repo-link'
                      href='https://github.com/thinkful-ei18/for_the_win_server' > 
                        Server 
                      </a>
                  </div>
                </div>
              </div>
            </section>
          </aside>

          <div className='standouts'>
            <h2 className='standout-title'>
              Key Features </h2>
            <ul className='standout-details'>
              <li>
                </li>
              <li>
                </li>
              <li>
                </li>
              <li>
                </li>
              </ul>
            <h2 className='standout-title'>
              My Role </h2>
            <ul className='standout-details'>
              <li>
                </li>
              <li>
                </li>
              <li>
                </li>
              <li>
                </li>
              </ul>
            <h2 className='standout-title'>
              Tech Stack </h2>
            <ul className='standout-details'>
              <li>
                React</li>
              <li>
                Redux</li>
              <li>
                Javascript</li>
              <li>
                HTML</li>
              <li>
                CSS</li>
              <li>
                Node</li>
              <li>
                Express</li>
              <li>
                MongoDB</li>
              <li>
                Mocha</li>
              <li>
                Chai</li>
              <li>
                Netlify</li>
              <li>
                Heroku</li>
              </ul>
          </div>

          <div className='photo-bank'>
            <img className='project-photo'
              src={require('../images/studies/ftw_01.png')} 
              alt='For The Win Mockup' />
            <img className='project-photo'
              src={require('../images/studies/ftw_02.png')} 
              alt='For The Win Mockup' />
            <img className='project-photo'
              src={require('../images/studies/ftw_03.png')} 
              alt='For The Win Mockup' />
            <img className='project-photo'
              src={require('../images/studies/ftw_04.png')} 
              alt='For The Win Mockup' />
          </div>
        <Contact />
      </section>
    )

  }
}
