import React, { Component } from 'react';

//React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import Swaay from './Swaay'
import Upworthy from './Upworthy'

//images
const swaayLogo = require('./img/projects/swaay/swaay-logo.png')
const upworthyLogo = require("./img/projects/upworthy/upworthy-logo.png")

class Work extends Component {
  render(){
    return(
    <Router>
      <div className="full-width" id="work">
        <h2>Portfolio</h2>
          <div className="row">

            <div className="half-width img-container upworthy">
              <Link to="upworthy"><img id="upworthy-logo" className="logo" src={upworthyLogo} alt="upworthy"/></Link>
              <p className="description">HTML, CSS, CMS</p>
            </div>

            <div className="half-width img-container swaay">
              <Link to="swaay"><img id="swaay-logo" className="logo" src={swaayLogo} alt="swaay media"/></Link>
              <p className="description">HTML, CSS, CMS</p>
            </div>
          </div>

            <div className="row">
            <Route path="/upworthy" component={Upworthy}/>
            <Route path="/swaay" component={Swaay}/>
            </div>
      </div>
    </Router>
    )
  }
}

export default Work
