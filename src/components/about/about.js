import React, { Component } from 'react'

export default class about extends Component {
    render () {
        return (
         
            
          <section id="about" className="s-about target-section">
            <div className="row">
              <div className="column large-3 tab-12">
                <img className="s-about__pic" src="images/avatars/user-00.jpg" alt="" />
              </div>
              <div className="column large-9 tab-12 s-about__content">
                <h3>About Me</h3>
                <p>
                  Gwapo, gwapo, gwapo, gwapo
                </p>
                <hr />
                <div className="row s-about__content-bottom">
                  <div className="column w-1000-stack">
                    <h3>Contact Details</h3>
                    <p>
                      J. Rayan Iglisia <br />
                      Nasipit Road, Talamban <br />
                      Cebu City, PH <br />
                      <a href="tel:+1975432345">+63 973 358 924</a> <br />
                      <a href="mailto:#0">j.rayaninociglisia@gmail.com</a>
                    </p>
                  </div>
                  <div className="column w-1000-stack">
                    <a href="#0" className="btn btn--download">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div> {/* end row */}
          </section> 
        );
    }
}
