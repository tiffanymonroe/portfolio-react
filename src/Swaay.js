import React, { Component } from 'react';


//images
const about = require("./img/projects/swaay/swaay-about-full.png")
const communities = require("./img/projects/swaay/swaay-communities-full.png")
const membership = require("./img/projects/swaay/swaay-membership-full.png")
const privacy = require("./img/projects/swaay/swaay-privacy-full.png")
const terms = require("./img/projects/swaay/swaay-terms-full.png")


class Swaay extends Component {
  render(){
    return(
        <section class="swaay">
          <p>Designed and built pages based on branding.</p>
          <div class="row">
              <div className="third-width">
                <a href="https://www.swaay.com/st/about"><img class="responsive-img"src={about} alt="Swaay About"/></a>
              </div>
              <div className="third-width">
                <a href="https://www.swaay.com/st/our-communities"> <img class="responsive-img" src={communities} alt="Swaay Communities"/></a>
              </div>
              <div className="third-width">
                <a href="https://www.swaay.com/st/membership"><img class="responsive-img" src={membership} alt="Swaay Membership"/></a>
              </div>
          </div>
          <div class="row">
            <div className="third-width">
              <a href="https://www.swaay.com/privacy-policy-2637057168"><img class="responsive-img" src={privacy} alt="Swaay Privacy Policy"/></a>
            </div>
            <div className="third-width">
              <a href="https://www.swaay.com/terms-of-use"><img class="responsive-img" src={terms} alt="Swaay Terms of Use"/></a>
            </div>
          </div>
      </section>
    )
  }
}

export default Swaay
