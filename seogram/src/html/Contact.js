import React from 'react';
import Jumbo from './Parts/Jumbo.js';
import Footer from './Parts/Footer.js';
import {FaMapPin} from 'react-icons/fa';
import {IoIosCall} from 'react-icons/io';
import {MdMail} from 'react-icons/md'


function Contact() {
    return (
        <>
            <Jumbo name="Contact" service="Contact Us"/>


            {/********* Form to Fill*************/}
            <div className="container">
      <div className="row text-center align-items-center">
        <div className="col-lg-4 py-3">
          <div className="display-4 text-center per1"><span ><FaMapPin/></span></div>
          <p className="mb-3 font-weight-medium text-lg">Address</p>
          <p className="mb-0 text-secondary">203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className="col-lg-4 py-3">
          <div className="display-4 text-center per1"><span><IoIosCall/></span></div>
          <p className="mb-3 font-weight-medium text-lg">Phone</p>
          <p className="mb-0"><a href="#####" className="text-secondary text-decoration-none">+1 232 3235 324</a></p>
          <p className="mb-0"><a href="#####" className="text-secondary text-decoration-none">+00 1122 3344 5566</a></p>
        </div>  
        <div className="col-lg-4 py-3">
          <div className="display-4 text-center per1"><span><MdMail/></span></div>
          <p className="mb-3 font-weight-medium text-lg">Email Address</p>
          <p className="mb-0"><a href="#####" className="text-secondary text-decoration-none">support@seogram.com</a></p>
          <p className="mb-0"><a href="#####" className="text-secondary text-decoration-none">hello@seogram.com</a></p>
        </div>
      </div>
    </div>
    {/******** Get In Touch **********/}
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <form action="#" class="contact-form py-5 px-lg-5">
            <h2 class="mb-4 font-weight-medium text-secondary">Get in touch</h2>
            <div class="row form-group">
              <div class="col-md-6 mb-3 mb-md-4">
                <label class="label" for="fname">First Name</label>
                <input type="text" id="fname" class="form-control"></input>
              </div>
              <div class="col-md-6">
                <label class="label" for="lname">Last Name</label>
                <input type="text" id="lname" class="form-control"></input>
              </div>
            </div>
    
            <div class="row form-group">
              <div class="col-md-12 mb-4">
                <label class="label" for="email">Email</label>
                <input type="email" id="email" class="form-control"></input>
              </div>
            </div>
    
            <div class="row form-group">
    
              <div class="col-md-12 mb-4">
                <label class="label" for="subject">Subject</label>
                <input type="text" id="subject" class="form-control"></input>
              </div>
            </div>
    
            <div class="row form-group">
              <div class="col-md-12 mb-4">
                <label class="label" for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="5" class="form-control label" placeholder="Write your notes or questions here..."></textarea>
              </div>
            </div>
    
            <div class="row form-group mt-4">
              <div class="col-md-12">
                <input type="submit" value="Send Message" class="btn btn-secondary btn-lg bg"></input>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6 px-0">
          <div class="maps-container"><div id="google-maps"></div></div>
        </div>
      </div>
    </div>    
    
            <Footer/>
        </>
    )
}

export default Contact
