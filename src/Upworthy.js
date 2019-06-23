import React, { Component } from 'react';

const original = require("./img/projects/upworthy/upworthy-original-design.png")
const redesign = require("./img/projects/upworthy/upworthy-404-full.png")

class Upworthy extends Component {
  render(){
    return(
    <div className="full-width">
      <section className="upworthy">
        <p>Implemented new design based on previous layout.</p>
        <div className="row">
          <div className="half-width full">
            <p className="header">Original</p>
            <img className="responsive-img" src={original} alt="original 404 page"/>
          </div>
          <div className="half-width full">
            <p className="header">Redesign</p>
            <img className="responsive-img" src={redesign} alt="redesigned 404 page"/>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

export default Upworthy
