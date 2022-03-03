

import React,{Component} from 'react';

export default class header extends Component {
  render() {
    return (
       <React.Fragment>

      <header className="s-header">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#contact">J Rayan</a></li>
            </ul>
          </nav>
        </div> {/* end row */}
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>
      </header>

      <section id="hero" class="s-hero target-section">

      <div class="s-hero__bg rellax" data-rellax-speed="-7"></div>

      <div class="row s-hero__content">
          <div class="column">

              <div class="s-hero__content-about">

                  <h1>I'm J. Rayan Iglisia</h1>

                  <h3>
                  I'm living in the realm of coding, <span>and enjoys developing web applications.</span>. Let's <a class="smoothscroll" href="#about">start scrolling</a> and learn more
                   <a class="smoothscroll" href="#about"> about me</a>.
                  </h3>

                  <div class="s-hero__content-social">
                      <a href="#0"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                      <a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                      <a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                      <a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a>
                      <a href="#0"><i class="fab fa-behance" aria-hidden="true"></i></a>
                      <a href="#0"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                  </div>

              </div>
          </div>
      </div>
   
      </section>
   
);
       </React.Fragment>
    )
  }
}
