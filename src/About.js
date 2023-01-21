import React from 'react';
import "./about.css";
import Navbar from './navbar';
import SkillCard from './SkillCard';

function About() {
  return (
    <>
    <Navbar />
    <div className='page'>
        <div>
            <h1 className='About-Me'> About  <span>Me</span> </h1>
        </div>

        <div className= "main">
            <div>
                <img src={'img/pic-about-my.jpg'}></img>
            </div>
            <div>
                <p>Hey folks! Vansh this side, I am 3nd yr. student of Bharati Vidyapeeth college of engineering, Pune. || Branch - ECE. I have good grip on tech. stack like <strong> HTML, CSS, Bootstrap, JavaScript , React JS, C/C++</strong>. And I also know DSA & also love to do competitive programming (3 Star @ CodeChef ). And on Development side, I am a front-end developer.</p>


                <button className='resume-btn'><a href='Vansh-Resume.pdf' target="_blank">Download Resume</a></button>
            </div>
        </div>

        <SkillCard />

    </div>  
    </>
  );
};

export default About;