import React, { Component } from 'react';

const logo = document.querySelector('swaay');
console.log(logo);

class Upworthy extends Component {
  render(){
    return(
    <div className="full-width" id="upworthy">
    <p>Implemented new design based on previous layout.</p>
    <section className="upworthy">
    <div className="row">
      <div className="half-width full">
        <p>Original</p>
        <img className="responsive-img" src="" alt="original 404 page"/>
      </div>
      <div className="half-width full">
        <p>Redesign</p>
        <img className="responsive-img" src="" alt="redesigned 404 page"/>
      </div>
    </div>
  </section>
      </div>
    )
  }
}

export default Upworthy
