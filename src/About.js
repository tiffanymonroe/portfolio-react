import React, { Component } from 'react';

class About extends Component {
  render(){
    return(
      <div className="full-width" id="about">
          <h2>A little bit about me.</h2>
          <div className="half-width">
            <p>My love of storytelling led me, in a roundabout way, to web development. I graduated with a dual degree in English and Creative Writing, then worked as a college writing instructor. I started to code as a hobby. I loved it so much that I decided to go through an immersive program with over 500 hours of instruction in three months. I discovered, then, that writing code is similar to writing poetry. It needs to have the most impact in the fewest lines. It tells a story.</p>
          </div>
          <div className="half-width">
            <p>I love working on the front end because it's where code meets creativity. It's where my experience teaching digital rhetoric helps me understand how to take an idea and build it into a useful feature through JavaScript, CSS, and some good ol’ HTML. I love learning new technology and figuring out challenges with my research skills. I also continue to practice building full stack apps.</p>
            <p>When I'm not working on my laptop, you'll find me with my two Cavalier King Charles Spaniels, <a href="http://instagram.com/tinkandteddy">Tink and Teddy</a>.</p>
          </div>
        </div>
    )
  }
}

export default About
