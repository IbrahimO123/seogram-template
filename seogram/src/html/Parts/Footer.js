import React from 'react';
import world1 from '../../assets/img/world_pattern.svg';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {IoLogoGoogleplus} from 'react-icons/io';

function Footer() {
    const footerStyle = {
        backgroundImage: `url(${world1})`,
        backgroundImageSize: 'cover',
        backgroundImageRepeat: 'no-repeat',
        backgroundImagePosition: 'center center',
        position: 'relative',
        display: 'block',
        paddingTop: '80px',
        backgroundColor: '#2D2B3A',
        color: 'white',
      }
    return (
        <>
         <footer style={footerStyle} >
            <div className="container" >
               <div className="row mb-5" >
                    <div className="col-lg-3 py-3" >
                        <h3>SEOGram</h3>
                        <p className="text-muted" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure</p>
                        <p>
                        <span className="media-link" ><FaFacebook/></span>
                        <span className="media-link" ><BsTwitter/></span>
                        <span className="media-link" ><IoLogoGoogleplus/></span>
                        <span className="media-link" ><FaInstagram/></span>
                        <span className="media-link" ><FaYoutube/></span>
                        </p>
                    </div>
            
                    <div className="col-lg-3 py-3" >
                    <h5>Company</h5>
                    <ul className="text-muted list-unstyled" >
                        <li><a className="text-decoration-none link2 btn" href="########">About Us</a></li>
                        <li><a className="text-decoration-none link2 btn" href="#######">Career</a></li>
                        <li><a className="text-decoration-none link2 btn" href="######">Advertise</a></li>
                        <li><a className="text-decoration-none link2 btn" href="###">Terms of Service</a></li>
                        <li><a className="text-decoration-none link2 btn" href="####">Help</a></li>
                    </ul>
                    </div>

                    <div className="col-lg-3 py-3" >
                    <h5>Contact Us</h5>
                    <p className="text-muted" >203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p className="" ><a className="text-decoration-none link2" href="####">+00 1122 3344 5566</a></p>
                    <p className="" ><a className="text-decoration-none link2" href="####">seogram@temporary.com</a></p>
                    </div>

                    <div className="col-lg-3 py-3" >
                    <h5>Newsletter</h5>
                    <p className="text-muted" >Get updates, news or events on your mail.</p>
                    <form action="##" method='post' >
                    <p><input className="input form-control" placeholder="Enter your Email." type="text" name="newsletter" ></input></p>
                    <p><button className="btn py-2 form-control mt-2 bg-success" type='submit' >Subscribe</button></p>
                    </form>
                    </div>
               </div>
               <div className="text-center text-muted py-3" >
               <p>Copyright © 2020. This template design and develop by <span className="text-success" >MACode ID</span></p>
               </div>
            </div>
         </footer>
        </>
    )
}

export default Footer
