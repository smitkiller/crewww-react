import React, { Component } from 'react';
//import logo from '../logo.svg';
import Header from './Header'
import Abouts  from '../containers/Abouts'

class About extends Component {
  render() {
    return (
      <div className="App">
      <Header txtTitle="About" />
        <Abouts />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <li>E-mail </li>
      </div>
    );
  }
}


export default About;
