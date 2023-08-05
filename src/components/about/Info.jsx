import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">5+ Years Working @ UPS, JAVS, and UofL</span>
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">100+ Apps: Mobile, Desktop, Web, Games </span>
        </div>
        <div className="about__box">
            <i className="bx bxs-graduation about__icon"></i>
            <h3 className="about__title">Master's Degree</h3>
            <span className="about__subtitle">Computer Science & Engineering</span>
        </div>
    </div>
  )

}

export default Info
