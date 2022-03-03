import React, { Component } from 'react'

export default class resume extends Component {
    
        render(){
          return (
      
            <section id="resume" className="s-resume target-section">
              <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                  <h3 className="section-header-allcaps">Career</h3>
                </div>
                <div className="column large-9 tab-12">
                  <div className="resume-block">
                    <div className="resume-block__header">
                      <h4 className="h3">DNA Micro Software Inc.</h4>
                      <p className="resume-block__header-meta">
                        <span>Sowftware Engineer</span> 
                        <span className="resume-block__header-date">
                          November 2020 - Present
                        </span>
                      </p>
                    </div>
                    <p>
                       First six(6) months I've been a web developer. Then switch to Backend developer which focuses on API's and Databses.
                    </p>
                  </div> {/* end resume-block */}
                  <div className="resume-block">
                    <div className="resume-block__header">
                      <h4 className="h3">StarTechUp Inc</h4>
                      <p className="resume-block__header-meta">
                        <span>Web Developer</span> 
                        <span className="resume-block__header-date">
                          July 2019 - March 2020
                        </span>
                      </p>
                    </div>
                    <p>
                        Intern for 8 months
                    </p>
                  </div> {/* end resume-block */}
                </div>
              </div> {/* s-resume__section */}
              <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                  <h3 className="section-header-allcaps">Education</h3>
                </div>
                <div className="column large-9 tab-12">
                  <div className="resume-block">
                    <div className="resume-block__header">
                      <h4 className="h3">Academic History</h4>
                      <br></br>
                      <p className="resume-block__header-meta">
                        <span><b>University of San Carlos</b></span> 
                        <br></br>
                        <span>Certificate in Computer Technology</span> 
                        <span className="resume-block__header-date">
                           November 2017 - March 2020
                        </span>
                      </p>
                    </div>
                    <p>
                       Through the help of Passerelles Numeriques I was given an oppurtunity to be their scholar.
                    </p>
                  </div> {/* end resume-block */}
                  <div className="resume-block">
                    <div className="resume-block__header">
                      {/* <h5 className="h3">School of Cool Designers</h5> */}
                      <p className="resume-block__header-meta">
                        <span><b>Sisters Of Mary School Boystown-Inc.</b></span> 
                        <br></br>
                        <span>Junior High & Senior High</span> 
                        <span className="resume-block__header-date">
                          March 2012
                        </span>
                      </p>
                    </div>
                    <p>
                      Develop my interpersonal skills, academic & athleticism.
                    </p>
                  </div> {/* end resume-block */}
                </div>
              </div> {/* s-resume__section */}
              <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                  <h3 className="section-header-allcaps">Skills</h3>
                </div>
                <div className="column large-9 tab-12">
                  <div className="resume-block">
                    <p>
                       TECHNOLOGIES
                    </p>
                    <ul className="skill-bars-fat">
                      <li>
                        <div className="progress percent85" />
                        <strong>HTML</strong>
                      </li>
                      <li>
                        <div className="progress percent50" />
                        <strong>CSS</strong>
                      </li>
                      <li>
                        <div className="progress percent95" />
                        <strong>Javascript</strong>
                      </li>
                      <li>
                        <div className="progress percent75" />
                        <strong>React</strong>
                      </li>
                      <li>
                        <div className="progress percent60" />
                        <strong>NestJs</strong>
                      </li>
                      <li>
                        <div className="progress percent50" />
                        <strong>Cassandra</strong>
                      </li>
                    </ul>
                  </div> 
                </div>
              </div> 
            </section> 
          );
        }
}
