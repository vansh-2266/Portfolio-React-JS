import React from 'react';
import Navbar from './navbar';
import "./workExp.css";

function Workexp() {
  return (
    <>
        <Navbar />

        <div className='work-Title'>
            <h1>Work <span>Experience</span></h1>
        </div>

    <div className="wrapper">
    <div className="center-line">
      <a href="#" class="scroll-icon"><i className="fas fa-caret-up"></i></a>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fas fa-home"></i>
        <div className="details">
          <span className="title"> <u>Technical Team Member</u> </span>
          <span>09/2021 - Present</span>
        </div>
        <li><span> <b>Google Developer Student Club, BVP Pune.</b> </span></li>
        &nbsp;
            <li><span><b> <u>Achievements/Tasks:</u> </b></span></li>
            <li><span>All Technical Works related to developments</span> </li>
            <li><span>Mentoring juniors.</span></li>
            <li><span>Contribution on different Events.</span></li>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fas fa-star"></i>
        <div className="details">
          <span className="title"> <u>Outreach & Media Lead</u> </span>
          <span>08/2021 - Present</span>
        </div>
        <li><span> <b>CodeChef BVP Chapter.</b> </span></li>
            &nbsp;
            <li><span><b> <u>Achievements/Tasks:</u> </b></span></li>
            <li><span>Managing all Coding Event & Sessions!</span> </li>
            <li><span>Guiding junior to explore CP.</span></li>
            <li><span>Taking sessions on coding related topics.</span></li>
      </section>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fas fa-rocket"></i>
        <div className="details">
          <span className="title"><u>Owner/ Content-Creators</u></span>
          <span>01/2021 - Present</span>
        </div>  
        <li><span> <b>Vansh Raj (YouTube Channel).</b> </span></li>
        &nbsp;
        <li><span><b> <u>Achievements/Tasks:</u> </b></span></li>
        <li><span>Podcast & Interview Experiences. </span> </li>
        <li><span>Programming Related Videos. </span></li>
        <li><span>Tips & Guidance for Engineering & Class 12 students.</span></li>
        <li><span>Shooting my college life.
        </span></li>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fas fa-globe"></i>
        <div className="details">
          <span className="title"><u>Technical Team member</u></span>
          <span>07/2021 - Present</span>
        </div>
        <li><span> <b>GeeksForGeeks BV(DU)COEP.</b> </span></li>
        &nbsp;
        <li><span><b> <u>Achievements/Tasks:</u> </b></span></li>
        <li><span>All Technical Works related to developments!</span> </li>
        <li><span>Made websites for many sessions!</span></li>
        <li><span>Contribution on different Events!
        </span></li>
      </section>
    </div>
    <div className="row row-1">
      <section>
        <i className="icon fas fa-paper-plane"></i>
        <div className="details">
          <span className="title"><u>Tech. Contect Writer</u></span>
          <span>Arp 2021 - May 2021</span>
        </div>
        <li><span> <b>AaurcRed Group.</b> </span></li>
        &nbsp;
        <li><span><b> <u>Achievements/Tasks:</u> </b></span></li>
        <li><span>Writing Blogs & Article related to Tech. </span> </li>
        <li><span>SEO (Search Engine Optimisation).</span></li>
        <li><span>Editing & framing.</span></li>
      </section>
    </div>
  </div>
    
    </>
  )
}

export default Workexp;