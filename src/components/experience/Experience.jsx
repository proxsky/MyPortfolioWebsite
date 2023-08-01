import React from 'react'
import "./experience.css"
import UPS from "../../assets/ups.png"

const Experience = () => {
  return (
   <section className="experience section">
    <h2 className="section__title" id="experience">Experience</h2>
    <span className="section__subtitle">My personal journey</span>

    <div className="experience__container container">
      <div className="experience__sections">
        <div className="experience__content">


          <div className="experience__data">
          <div>
         
          <div className="skills__data">
          <img src={UPS} className="icon__size_experience"/>
          <h3 className="experience__title">United Parcel Service</h3> 
          </div>
            <span className="experience__subtitle">OR Analytics Developer</span>
            <div className="experience__calendar"> 
              <i className="uil uil-calendar-alt"></i> Oct 2020 - Present
              </div>
            </div>
            <div>
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>
          </div>
          
          <div className="experience__data">
            <div></div>
            <div>
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>
            <div>
            <h3 className="experience__title">Self-Employed</h3>
            <span className="experience__subtitle">Android Software Developer</span>
            <div className="experience__calendar"> 
              <i className="uil uil-calendar-alt"></i> 2018 - Present
              </div>
              </div>
          </div>

          <div className="experience__data">
          <div>
            <h3 className="experience__title">University of Louisville</h3>
            <span className="experience__subtitle">Master of Engineering - Computer Science and Engineer</span>
            <div className="experience__calendar"> 
              <i className="uil uil-calendar-alt"></i> 2019 - 2020
              </div>
              </div>
            <div>
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>
          </div>


          <div className="experience__data">
            <div></div>
            <div>
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>
            <div>
            <h3 className="experience__title">University of Louisville</h3>
            <span className="experience__subtitle">Bachelor's degree - Computer Science and Engineer</span>
            <div className="experience__calendar"> 
              <i className="uil uil-calendar-alt"></i> 2014 - 2019
              </div>
            </div>
          </div>

          <div className="experience__data">
          <div>
            <h3 className="experience__title">University of Louisville</h3>
            <span className="experience__subtitle">Computer Engineer and Computer Science Tutor</span>
            <div className="experience__calendar"> 
              <i className="uil uil-calendar-alt"></i> Jan 2019 - Apr 2019
              </div>
              </div>
            <div>
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>
          </div>

          <div className="experience__data">
            <div></div>
            <div>
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>
            <div>
            <h3 className="experience__title">Justice AV Solutions</h3>
            <span className="experience__subtitle">Software Engineer Intern</span>
            <div className="experience__calendar"> 
              <i className="uil uil-calendar-alt"></i> May 2016 - Dec 2017
              </div>
            </div>
          </div>

    

          </div>
      </div>
    </div>

   </section>
  )
}

export default Experience
