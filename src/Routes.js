
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/Main'
import ForTheWin from './components/portfolio/ForTheWin'


export default class Routes extends Component {

  render() {

    return (
      <Router>
        <div className='appPage'>
          <main className='main' role='main'>
            <Route exact path='/' component={Main} />
            <Route exact path='/forthewin' component={ForTheWin} />
          </main>
        </div>
      </Router>
    );
  }
}