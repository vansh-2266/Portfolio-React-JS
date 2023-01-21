import React from 'react';
import "./about.css";


function SkillCard() {
  return (
    <>
        <div>
            <h1 className='skills-Me'> My <span>Skills</span> </h1>
            <div className='mySkillss'>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/javascript.png'}></img>
                    <h2 className='skill-title'>JavaScript</h2>
                    <button className='learn-btn'><a href='https://www.javascripttutorial.net/'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/c-.png'}></img>
                    <h2 className='skill-title'>C & C++</h2>
                    <button className='learn-btn'><a href='https://cplusplus.com/doc/tutorial/'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/hosting-server.png'}></img>
                    <h2 className='skill-title'>Data Structures</h2>
                    <button className='learn-btn'><a href='https://www.tutorialspoint.com/cplusplus/cpp_data_structures.htm'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/algorithm.png'}></img>
                    <h2 className='skill-title'>Algorithm</h2>
                    <button className='learn-btn'><a href='https://www.javatpoint.com/cpp-algorithm'  target= "_blank">Resources</a></button>
                </div>
            </div>
        </div>
        <div className='mySkillss'>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/react.png'}></img>
                    <h2 className='skill-title'>React JS</h2>
                    <button className='learn-btn'><a href='https://reactjs.org/tutorial/tutorial.html'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/bootstrap.png'}></img>
                    <h2 className='skill-title'>Bootstrap</h2>
                    <button className='learn-btn'><a href='https://youtu.be/-qfEOE4vtxE'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/python.png'}></img>
                    <h2 className='skill-title'>Python & Django</h2>
                    <button className='learn-btn'><a href='https://youtu.be/PtQiiknWUcI'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/github.png'}></img>
                    <h2 className='skill-title'>Git & GitHub</h2>
                    <button className='learn-btn'><a href='https://youtu.be/gwWKnnCMQ5c'  target= "_blank">Resources</a></button>
                </div>
            </div>
        </div>
        <div className='mySkillss'>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/database.png'}></img>
                    <h2 className='skill-title'>Firebase</h2>
                    <button className='learn-btn'><a href='https://firebase.google.com/docs'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/figma.png'}></img>
                    <h2 className='skill-title'>UI/UX Design</h2>
                    <button className='learn-btn'><a href='https://youtu.be/kbZejnPXyLM'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/nodejs.png'}></img>
                    <h2 className='skill-title'>Node.Js</h2>
                    <button className='learn-btn'><a href='https://youtu.be/BLl32FvcdVM'  target= "_blank">Resources</a></button>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/htmlCss.png'}></img>
                    <h2 className='skill-title'>HTML & CSS</h2>
                    <button className='learn-btn'><a href='https://www.codecademy.com/catalog/language/html-css'  target= "_blank">Resources</a></button>
                </div>
            </div>
            
        </div>
        <div className='mySkillss'>
            <div className='card'>
                <div className='card-body'>
                    <img src={'img/clapperboard.png'}></img>
                    <h2 className='skill-title'>Video Editing</h2>
                    <button className='learn-btn'><a href='https://youtu.be/GUHItjpQOdE' target= "_blank">Resources</a></button>
                </div>
            </div>
            
        </div>
        </div>

    </>
  )
}

export default SkillCard;