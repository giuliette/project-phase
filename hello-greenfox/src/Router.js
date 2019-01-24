import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import withRedux from './WithRedux';
import States from './WithStates';
import Home from './Home';

class Router extends Component {
  render = () => (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route path='/simple/states' component={States} />
        <Route path='/simple/redux' component={withRedux} />
      </div>
    </BrowserRouter>
  )
}

export default Router;