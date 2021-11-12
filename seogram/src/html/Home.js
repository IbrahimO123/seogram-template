import React from 'react';
import Footer from './Parts/Footer.js';
import Pricing from './Parts/Pricing.js';
import ServiceUs from './Parts/ServiceUs.js';
import AboutUs from './Parts/AboutUs.js';
import BlogSmall from './Parts/BlogSmall.js';
import Content from './Parts/Content.js';
import banner1 from '../assets/img/banner_image_1.svg';
import banner2 from '../assets/img/banner_image_2.svg';
import bg1 from '../assets/img/bg_pattern.svg';
import {ImPlay2} from 'react-icons/im'


function Home() {
    const styleImg1 = {
        width:'400px',
        marginTop: '-25px',
        marginRight: '40px'
    }

    const styleService = {
      backgroundImage: `url(${bg1})`,
      backgroundImageSize: 'cover',
      backgroundImageRepeat: 'no-repeat',
      backgroundImagePosition: 'center center',
      position: 'relative',
    }
    return (
        <div>
        {/***********************Header *******************/}
        <div  className="container" >
            <div className="jumbotron jumbotron-fluid bg-light mt-4 py-5 banner2">
            <div className="row align-items-center flex-wrap-reverse h-100" >
             <div  className="col-md-6 py-5">
                <div className="px-5 mb-4" id='banner1' >
                <h1 className="text-secondary">Let's  Check and Optimise your website! </h1>
                <p className="text-lg text-muted" >Ignite the most powerful growth engine you have ever built for your company</p>
                <div >
                  <div className="mt-5">
                        <a href="##" className="btn btn-secondary rounded-pill py-2 px-2  text-white bg" >Watch Video 
                                <div className="px-2  d-inline-flex" >
                                <span>
                                    <ImPlay2/>
                                </span>
                                </div>
                            </a>
                    </div>    
                </div>
                </div>
                </div>
                <div className="col-md-6" >
                  <div>
                  <img className="img img-fluid rounded-sm" style={styleImg1} alt="banner-1" src={banner1}></img> 
                  </div>
                </div>
              </div>
            </div>
            </div>
        {/***************Header **************/}

        {/********Card-layout section ***********/}
        <Content/>
        {/*******card-layout section ************/}

        {/*********About Us ************/}
                 <AboutUs/>
        {/**********About Us ************/}

        {/*********Our Services ***********/}
           <ServiceUs/>
        {/*******Our Services **********/}

        {/****************Our Services Check *******************/}
            <div className="services w-100 text-center py-5 " >
                <div className="services py-5" style={styleService} >
                 <label className="d-block h3 text-white" >Check your Website SEO:</label>
                 <div className="input-group w-50 mx-auto py-3">
                       <input className="form-control w-50 mx-auto" placeholder="E.g google.com" type="text" ></input>
                        <button className="btn btn-success rounded">Check Now</button>
                 </div>
                </div>
            </div>
        {/******* PRICING PLAN ******/}
            <Pricing/>
        {/*** PRICING PLAN ********/}
        {/******************* Visibility SEO ********************/}
            <div className="bg2 py-5 text-white" style={styleService} >
            <div className="container ">
              <div className="row align-items-center" >
            <div className="col-lg-6 py-3 pr-lg-5 ">
                       <div>
                              <div className="subhead" ></div>
                                <h2 className=" w-75 " >SEO to Improve Brand Visibility</h2>
                                <div className="divider2" ></div>
                       </div> 
                        <div className="py-3" >
                            <p> We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>
                        </div>
                        <div>
                             <ul>
                               <li>SEO Content Strategy </li>
                               <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                               <li>B2B SEO</li>
                               <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                             </ul>
                        </div>
                   </div>
                   <div className="col-lg-6 py-3 pr-lg-5 mt-3 ml-4 text-center" >
                       <p className=""><img className="img-responsive" src={banner2} alt="" ></img></p>
                   </div>
              </div>
            </div>
            </div>
        {/***********Blog section *********/}
          <BlogSmall/>
        {/*******Blog section ************/}

        {/***********Footer**************/}
        <Footer/>
        {/**************Footer**************/}
        </div>
    )
}


export default Home
