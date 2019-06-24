import React from 'react';
import './App.css';

//React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
//components
import About from './About'
import Technology from './Technology'
import Contact from './Contact'
import Resume from './Resume'
import Work from './Work'


function App() {
  return (
    <Router>
    <div className="App">
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#tech">Technology</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="http://www.tiffanymonroe.com/tiffany_monroe_resume_jun2019.pdf" target="_blank">Résumé</a></li>
          </ul>
      </nav>
      <h1>Tiffany Monroe</h1>

      <div className="full-width" id="hero"></div>
      <About/>
      <Technology/>
      <div className="full-width" id="work"><h2>Portfolio</h2></div>
      <Contact/>
    <footer>Made with <i className="fas fa-coffee"></i> by Tiffany Monroe</footer>
  </div>
  </Router>
  );
}

export default App;
