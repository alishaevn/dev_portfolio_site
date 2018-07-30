
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Safer from './components/Safer';
import FoodiePhonetics from './components/FoodiePhonetics';
import ForTheWin from './components/ForTheWin';
import IdentityDesign from './components/IdentityDesign';
import Photography from './components/Photography';
import Resume from './components/Resume';


export default class Routes extends Component {

  render() {

    return (
      <Router>
        <main className='main' role='main'>
          <Route exact path='/' component={Home} />
          <Route exact path='/safer' component={Safer} />
          <Route exact path='/foodiephonetics' component={FoodiePhonetics} />
          <Route exact path='/forthewin' component={ForTheWin} />
          <Route exact path='/identity' component={IdentityDesign} />
          <Route exact path='/photos' component={Photography} />
          <Route exact path='/resume' component={Resume} />
        </main>
      </Router>
    );
  }
}