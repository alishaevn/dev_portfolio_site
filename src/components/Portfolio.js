import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './portfolio.css'

export default class Portfolio extends Component {
  render() {

    // const portfolio = [
    //   {
    //     uri: '/forthewin',
    //     src: '../images/portfolio/ftw_mock.png',
    //     alt: 'for the win mockup'
    //   }
    // ]

    // const portfolioThumbnails = portfolio.forEach( project => {
    //   console.log(
    //   <Link
    //     to={project.uri}
    //     className='project-image-link'
    //     onClick={() => handleClick()}
    //   >
    //     <img src={require(`${project.src}`)} alt={project.alt} className='portfolio-thumbnail' />
    //   </Link>)
    // })

    // const handleClick = () => {
    //   console.log('clicked')
    // }

    return (
      <div className='portfolio-component' id='portfolio'>
        <h3 className='portfolio-title'>PORTFOLIO</h3>
        <div className='row-one' >

          <div className='project-one'>
            <img src={require('../images/portfolio/ftw_responsive.png')} alt='For The Win Mockup' className='portfolio-responsive-mock' />
            <p className='portfolio-project-title'>For The Win</p>
            <p className='portfolio-services'>FULL STACK DEVELOPMENT • UI/UX DESIGN</p>
            <p className='portfolio-project-tagline'>
              The basketball enthusiast's preferred way to track stats for their favorite players.
            </p>
            <p classname='live-porfolio-par'>
              <a
                href='https://for-the-win-app.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='live-portfolio-link'
              >View the Live Site
              </a>
            </p>
            <p classname='github-repo-par'>
              <a
                href='https://github.com/thinkful-ei18/for_the_win_client'
                target='_blank'
                rel='noopener noreferrer'
                className='github-repo-link'
              >Github Repo</a>
            </p>
          </div>

        </div>
      </div>
    )

  }
}

/*
<Link
  to='/forthewin'
  className='project-image-link'
  onClick={}
>
  <img src={require('../images/portfolio/ftw_mock.png')} alt='For The Win Mockup' className='portfolio-homepage-mock' />
</Link>
*/