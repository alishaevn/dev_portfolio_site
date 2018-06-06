
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Main from './components/Main'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/AboutMe';
import Contact from './components/Contact';
import Safer from './components/portfolio/Safer';
import FoodiePhonetics from './components/portfolio/FoodiePhonetics';
import ForTheWin from './components/portfolio/ForTheWin';
import NCSS from './components/portfolio/NCSS';


export default class Routes extends Component {

  render() {

    return (
      <Router>
        <div className='appPage'>
          <main className='main' role='main'>
            <Home />
            <Route exact path='/' component={Portfolio} />
            <Route exact path='/safer' component={Safer} />
            <Route exact path='/foodiephonetics' component={FoodiePhonetics} />
            <Route exact path='/forthewin' component={ForTheWin} />
            <Route exact path='/ncss' component={NCSS} />
            <About />
            <Contact />

          </main>
        </div>
      </Router>
    );
  }
}