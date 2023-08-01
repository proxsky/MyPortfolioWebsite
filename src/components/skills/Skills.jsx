import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Stack from './Stack';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My techanical skills</span>
      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Stack/>
      </div>
    </section>
  )
}

export default Skills
