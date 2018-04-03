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
            <Link
              to='/forthewin'
              className='project-image-link'
            >
              <img src={require('../images/portfolio/ftw_mock.png')} alt='For The Win Mockup' className='portfolio-homepage-mock' />
            </Link>              
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