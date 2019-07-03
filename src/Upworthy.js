import React, { Component } from 'react';



class Upworthy extends Component {
  render(){
    return(
    <div className="full-width">
      <section className="upworthy">
        <p>Implemented new design based on previous layout.</p>
        <div className="row">
          <div className="half-width full">
            <p className="header">Original</p>

          </div>
          <div className="half-width full">
            <p className="header">Redesign</p>
    
          </div>
        </div>
      </section>
    </div>
    )
  }
}

export default Upworthy
