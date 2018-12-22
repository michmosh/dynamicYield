import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Config from './config';
import Header from './header/header'
import Footer from './footer/footer';
import Sidenav from './side-nav/side-nav';
import Main from './main/main';
class App extends Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header appName={Config.appName} />
          <Sidenav links={Config.navLinks}/>
          <Main credetials={Config.credetials} />
          <Footer appName={Config.appName}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
