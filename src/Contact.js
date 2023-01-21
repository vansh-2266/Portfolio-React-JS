import React from 'react';
import { Link } from 'react-router-dom';
import "./contact.css"
import Navbar from './navbar';

function Contact() {
  return (
    <>
      <Navbar />

      <div className='main-out'>
          <div className='heading-contact'>
            <h1>Contact <span>Us</span></h1>
            <p>Please take a moment to get in touch, I will get back to you shortly.</p>
          </div>
     

      <div>
        <div>
          <form action="https://formsubmit.co/rajvansh2510@gmail.com" method="POST">
              <label for="the-name">Name</label>
              <input className="name" type="text" name="name" id="the-name"></input>
              <input type="hidden" name="_subject" value="New Responses from contact page!"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <label for="the-email">Email ID</label>
              <input className="email" type="email" name="email" id="the-email" ></input>
              <label for="the-phone">Phone no.</label>
              <input className='phone' type="tel" name="phone" id="the-phone" ></input>
              <label for="the-message">Message</label>
              <textarea className='msg' name="message" id="the-message"></textarea>

              <input className='Send-btn' type="submit" value="Send Message"></input>
          </form>
        </div>

        <div className='c-icon'>
          <span><a href='https://github.com/vansh-2266' target="_blank"><img src={'img/c-icon-1.png'}></img></a></span>
          <span><a href='https://www.linkedin.com/in/vansh-raj-60877b1bb/' target="_blank"><img src={'img/c-icon-2.png'}></img></a></span>
          <span><a href='https://www.youtube.com/channel/UCNjqbzH1NBE0eU7NXck8O9A' target="_blank"><img src={'img/c-icon-3.png'}></img></a></span>
          <span><a href='https://www.instagram.com/vansh_2266/' target="_blank"><img src={'img/c-icon-4.png'}></img></a></span>
        </div>
      </div>

      </div>

  
    </>
  )
}

export default Contact;