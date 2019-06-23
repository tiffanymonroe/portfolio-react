import React, { Component } from 'react';

class Technology extends Component {
  render(){
    return(
      <div className="full-width" id="tech">
        <div className="row">
          <div className="third-width">
            <i className="far fa-image"></i>
            <h3>Convert Design into Code</h3>
            <p>I take your vision—whether it's Adobe XD, Photoshop, or a drawing on a napkin—and turn it into a pixel perfect match.</p>
          </div>
          <div className="third-width">
            <i className="fas fa-code"></i>
            <h3>HTML5</h3>
            <p>I write clean, semantic HTML5 by hand to make sure that the content is always easy to read, maintain, and troubleshoot.</p>
          </div>

          <div className="third-width">
            <i className="fas fa-desktop"></i>
            <h3>CSS3</h3>
            <p>I focus on keeping my CSS lean and fast to load, and I make it a habit to stay up to date on current best practices.</p>
          </div>
        </div>
        <div className="row">
          <div className="third-width">
            <i className="fab fa-js"></i>
            <h3>JavaScript</h3>
            <p>I use computational thinking to solve problems and write vanilla JavaScript to create dynamic websites.</p>
          </div>
          <div className="third-width">
            <i className="fab fa-react" id="react"></i>
            <h3>JavaScript Libraries</h3>
            <p>I add exciting features with JavaScript libraries such as jQuery, React, or Angular.</p>
          </div>
          <div className="third-width">
            <i className="fas fa-tablet-alt"></i>
            <h3>Responsive Design</h3>
            <p>I build responsive, mobile-first apps using vanilla CSS or tools, such as Bootstrap.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Technology
