import React, { Component } from 'react';

// image
const contact = require("./img/coffee_contact.jpg")

class Contact extends Component {
  render(){
    return(
      <div className="full-width" id="contact">
          <div className="half-width">
            <img id="contact-img" src={contact} alt="Contact Me"/>
          </div>

          <div className="half-width" id="contact-info">
            <h2>Contact</h2>
            <ul>
                <li><a href="mailto:hello@tiffanymonroe.com" target="_blank"><i className="far fa-envelope"></i></a></li>
                <li><a href="http://github.com/tiffanymonroe" target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/tiffanymonroe/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://codepen.io/tiffanymonroe/" target="_blank"><i className="fab fa-codepen"></i></a></li>
            </ul>
          </div>
      </div>

    )
  }
}

export default Contact
