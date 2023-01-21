import React from 'react';
import Navbar from './navbar';

function Education() {
  return (
    <>

        <Navbar />
            <div className='edu-title'>
            <h1 class="text-center pt-5" ><strong><u>My <span>Education</span></u></strong></h1>
            </div>

            <div class="wrapper">
            <div class="center-line">
                <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
            </div>
            <div class="row row-1">
                <section>
                <i class="icon fas fa-rocket"></i>
                <div class="details">
                    <span class="title"><u>Bachelor of Technology</u></span>
                    <span>2020-Present</span>
                </div>
                <li><span>Bharati Vidyapeeth's College of Engineering, Pune.</span></li>
                    <li><span><b>Grade:  </b></span> <span> 9.84 CGPA. (Till Now)</span></li>
                    <li><span><b>Branch:  </b></span> <span> Electronics & Communication (ECE).
                    </span></li>
                </section>
            </div>
            <div class="row row-2">
                <section>
                <i class="icon fas fa-paper-plane"></i>
                <div class="details">
                    <span class="title"> <u>HSC Board (Class- 12)</u> </span>
                    <span>2018-2020</span>
                </div>
                <ul>
                    <li><span>Dhanbad Public School, Dhanbad, Jharkhand.</span></li>
                    <li><span><b>Grade:  </b></span> <span> 91.6 %</span></li>
                    <li><span><b>Subject:  </b></span> <span> Science (PCM).</span></li>
                </ul>
                </section>
            </div>
            <div class="row row-1">
                <section>
                <i class="icon fas fa-globe"></i>
                <div class="details">
                    <span class="title"> <u>Class 10th</u> </span>
                    <span>2017 - 2018</span>
                </div>
                <ul>
                    <li><span>Dhanbad Public School, Hirak Branch, Dhanbad.</span></li>
                    <li><span><b>Grade:  </b></span> <span> 80 %</span></li>
                </ul>
                </section>
            </div>
            </div>
    </>
  )
}

export default Education