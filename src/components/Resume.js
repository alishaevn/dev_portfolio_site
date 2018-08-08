import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import '../styles/css/resume.css';

export default class Resume extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    let title = this.props.match.path === '/resume'
      ? 'RESUME'
      : ''

    return(
      <section>
        <Header 
          title={title} />
          <div className='resume-topper'>
            <section className='resume-one'>
              <div className='resume-one-about'>
                <h1 className='h1'>Alisha Evans</h1>
                <h2 className='h2'>M.F.A.</h2>
                <h3 className='h3'>Front-End Developer</h3>

              </div>
              <div className='resume-one-details'>
                <h3 className='resume-header-blue'>CONTACT:</h3>
                <p className='resume-text'> alishaantoinette.com <br />
                  619-535-8245 <br />
                  alieva.inc@gmail.com</p>
                <h3 className='resume-header-blue'>WHY ME?</h3>
                <p className='resume-text'>As someone educated in Graphic Design & Full Stack Development, I understand the jargon & methodologies of Web Designers & Back End Developers; thus bridging the gap across the web development process.</p>

              </div>
            </section>
            <section className='resume-two'>
              <div>
                <h3 className='resume-header-white'>EXPERIENCE:</h3>
                <h4 className='bold-title'>FULL STACK DEVELOPER - FREELANCE</h4>
                <p className=''>January 2018 - Present | San Diego, CA</p>
                <ul className=''>
                  <li className='resume-text'><span className=''>safeR</span> - Keep the community safer by staying up to date on local crimes and incidents in the area.</li>
                  <li className='resume-text'><span>Foodie Phonetics</span> - Learn how to say the most common food items in French! </li>
                  <li className='resume-text'><span>For The Win</span> - Make or join a fantasy basketball league and keep up with the stats of your favorite basketball players! </li>
                </ul>
                <h4 className='bold-title'>DESIGNER & PHOTOGRAPHER - ALIEVA AGENCY</h4>
                <p className=''>May 2010 – Present | San Diego, CA</p>
                <ul className=''>
                  <li className='resume-text'>Conceptualize, design and execute visual brand identities.</li>
                  <li className='resume-text'>Designed employee apparel for the grand opening of a new business.</li>
                  <li className='resume-text'>Photographed headshots used in professional publications.</li>
                </ul>
                <h4 className='bold-title'>INTERN - JOEL PAYNEL & CO.</h4>
                <p className=''>February - June 2017 | San Diego, CA</p>
                <ul className=''>
                  <li className='resume-text'>Collaborated on the naming of, logo design, and web design of an upcoming agricultural company.</li>
                  <li className='resume-text'>Developed a style guide, stationary specs and digital assets for Voila Montessori.</li>
                </ul>
                <h4 className='bold-title'> TECHNICAL SUPPORT TECHNICIAN - C SPIRE WIRELESS</h4>
                <p className=''>August 2010 - March 2016 | Jackson, MS</p>
                <ul className=''>
                  <li className='resume-text'>Trained new employees and assisted in cross training with other departments. </li>
                  <li className='resume-text'>Wrote and edited documentation that Customer Care & Retail employees used for troubleshooting.</li>
                  <li className='resume-text'>Managed customer and remote employee relationships. </li>
                </ul>
              </div>
              <div>
                <h3 className='resume-header-white'>EDUCATION:</h3>
                <h4 className='bold-title'>ENGINEERING IMMERSION GRADUATE</h4>
                <p className='resume-text'>Thinkful, Brooklyn, NY</p>
                <p className='resume-text'>January 2018 - June 2018</p>
                <h4 className='bold-title'>MASTER OF ARTS: MEDIA DESIGN</h4>
                <p className=''>3.92 GPA. | Salutatorian. </p>
                <p className='resume-text'>Full Sail University, Winter Park, FL. <br />
                  November 2013 - November 2014</p>
                <h4 className='bold-title'>BACHELOR OF ARTS: GRAPHIC DESIGN; MINOR: MARKETING</h4>
                <p className=''>3.67 GPA. | Full academic scholarship.</p>
                <p className='resume-text'>Jackson State University, Jackson, MS. <br />
                  August 2005 – May 2010</p>
              </div>
          <article className='resume-three'>
            <h3 className='resume-header-white'>TECHNOLOGIES:</h3>
            <li className='resume-text'>HTML5</li>
            <li className='resume-text'>JavaScript</li>
            <li className='resume-text'>React</li>
            <li className='resume-text'>jQuery</li>
            <li className='resume-text'>CSS3</li>
            <li className='resume-text'>SASS</li>
            <li className='resume-text'>Adobe Creative Suite</li>
            <li className='resume-text'>Sketch</li>
            <li className='resume-text'>Github</li>
            <li className='resume-text'>Redux</li>
            <li className='resume-text'>MongoDB</li>
            <li className='resume-text'>Express</li>
            <li className='resume-text'>Node</li>
            <li className='resume-text'>RESTful API</li>
          </article>
            </section>
          </div>
        <Contact />
        
      </section>
    )
  }
}