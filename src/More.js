import React, { Component } from 'react';

// images
const jubilee = require("./img/projects/jubilee.png")
const rogue = require("./img/projects/rogue.png")
const portola = require("./img/projects/portola_mockup_thumbnail.png")
const pawnee = require("./img/projects/pawnee.png")
const project2 = require("./img/projects/project_2.png")
const project3 = require("./img/projects/project_3.png")
const project4 = require("./img/projects/project_4.png")
const project5 = require("./img/projects/project_5.png")

class More extends Component{
  render(){
    return(
      <section className="more">
        <div class="row">
          <div class="fourth-width">
            <a href="http://tiffanymonroe.com/jubilee" target="_blank"><img className="thumbnail" src={jubilee} alt="Jubilee Austen" /></a>
            <p>HTML / CSS from PSD</p>
          </div>
          <div class="fourth-width">
            <a href="http://tiffanymonroe.com/rogue" target="_blank"><img className="thumbnail" src={rogue} alt="Rogue Pickings" /></a>
            <p>HTML / CSS from PSD</p>
          </div>
          <div class="fourth-width">
            <a href="https://pawnee.herokuapp.com/" target="_blank"><img class="thumbnail" src={pawnee} alt="Pawnee, Indiana" /></a>
            <p>MongoDB, Express.js, React.js, Node.js</p>
          </div>
          <div class="fourth-width">
            <a href="https://github.com/tiffanymonroe/portola-mockup"><img class="thumbnail" src={portola} alt="Portola Mockup"/></a>
            <p>MongoDB, Express.js, Node.js, Bootstrap</p>
          </div>
      </div>

      <div class="row">
        <div class="fourth-width">
          <a href="https://creative-blogging.herokuapp.com/"><img class="thumbnail" src={project2} alt="Creative Blogging"/></a>
          <p>MongoDB, Express.js, Node.js, Bootstrap</p>
        </div>
        <div class="fourth-width">
          <a href="https://dadjoketime.herokuapp.com/"><img class="thumbnail" src={project3} alt="Dad Joke Factory"/></a>
          <p>HTML, CSS, Bootstrap, MEAN Stack</p>
        </div>
        <div class="fourth-width">
          <a href="https://travel-books.herokuapp.com/"><img class="thumbnail" src={project4} alt="Travel Books"/></a>
          <p>HTML, CSS, Bootstrap, Angular.js, Ruby, Rails</p>
        </div>
        <div class="fourth-width">
          <a href="http://disneyland-decoded.herokuapp.com/"><img class="thumbnail" src={project5} alt="Disneyland Decoded"/></a>
          <p>HTML, CSS, Bootstrap, Angular.js, Ruby, Rails</p>
        </div>
      </div>
      </section>

    )
  }
}

export default More
