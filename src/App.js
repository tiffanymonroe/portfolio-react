import React from 'react';
import './App.css';

//React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Technology from './Technology'
import Work from './Work'


function App() {
  return (
    <Router>
    <div className="App">
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="http://www.tiffanymonroe.com/tiffany_monroe_resume_jun2019.pdf" target="_blank">Résumé</a></li>
          </ul>
      </nav>
      <h1>Tiffany Monroe</h1>


        <Route exact path="/" component={Hero} />
        <Route path="/about" component={About} />
        <Route path="/technology" component={Technology} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />



    <footer>Made with <i className="fas fa-coffee"></i> by Tiffany Monroe</footer>
</div>
</Router>
  );
}

export default App;
