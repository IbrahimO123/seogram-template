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
    <div className="container">
      <div className=""> 
            <form>
            <p>Get In Touch</p>
            <div className="row" > 
            <div className="col-lg-4" >
                <label>First Name</label>
                <input type="text" className="" ></input>
            </div>
            <div className="col-lg-4" >
                <label>Last Name</label>
                <input type="text" className="" ></input>
            </div>
            </div>
            <div>
                <label>Email</label>
                <input type="email" className="" ></input>
            </div>
            <div>
                <label>Subject</label>
                <input type="text" className="" ></input>
            </div>
            <div>
                <label>Message</label>
                <input type="textarea" className="" ></input>
            </div>
            </form>
            <div>

            </div>
      </div>
    </div>
    
    
            <Footer/>
        </>
    )
}

export default Contact
