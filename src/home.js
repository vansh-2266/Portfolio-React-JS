import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


function Home() {
  return (
    <>

<div className="container">
        <div className="box">
            <a className='LinkDes' href="https://www.youtube.com/channel/UCNjqbzH1NBE0eU7NXck8O9A" target="_blank">
                 <div className="content">
                     <img className="name-logo my-profile" src={"img/cooltext400442727478523.png"} alt="about-me-Icon"></img>

                    <p className='title-position'><b>Founder, Developer and Youtuber</b></p>

                </div>
            </a>
        </div>

        <div className="box">
        <Link className='LinkDes' to={"/about"} >
            <div className="content">
                <img className="my-profile" src={"img/mypp.jpeg"} alt="about-me-Icon"></img>
                <h2>About Me</h2>
            </div>
        </Link>
        </div>

        <div className="box">
         <a className='LinkDes' href="Vansh-Resume.pdf" target="_blank">
            <div className="content">                 
                <img src={"img/resume.png"} alt="about-me-Icon"></img>
                <h3> My Resume </h3>
            </div>
        </a>
        </div>

        <div className="box">
        <Link className='LinkDes' to={"/work-experience"} >
            <div className="content">
                <img src={"img/team.png"} alt="about-me-Icon"></img>
                <h2>Work Experience</h2>
            </div>
        </Link>
        </div>

        <div className="box">

            <Link className='LinkDes' to={"/contact"} >    
                <div className="content">

                 <img className="contact_text my-profile" src={"img/contact 3.0.png"} alt="about-me-Icon"></img>

                </div>
            </Link>
        </div>

        <div className="box">
            <Link className='LinkDes' to={"/education"} >  
            <div className="content">
                <img src={"img/education.png"} alt="about-me-Icon"></img>
                <h2>Education</h2>
            </div>
            </Link>
        </div>

        <div className="box">
        <Link className='LinkDes' to={"/projects"} >     
            <div className="content">
                <img src={"img/skill.png"} alt="about-me-Icon"></img>
                <h2>My Projects</h2>
            </div>
        </Link>
        </div>

    </div>
        
    </>
  )
}

export default Home;