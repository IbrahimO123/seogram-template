import React from 'react';
import banner1 from '../assets/img/banner_image_1.svg';
import frame1 from '../assets/img/about_frame.png';
import service1 from '../assets/img/services/service-1.svg';
import service2 from '../assets/img/services/service-2.svg';
import service3 from '../assets/img/services/service-3.svg';
import { IoIosBusiness } from 'react-icons/io';
import {ImPlay2} from 'react-icons/im'
function Home() {
    const styleImg1 = {
        width:'400px',
        marginTop: '-25px',
        marginRight: '40px'

    }
    const boxstyle1 ={
     boxShadow: '0 3px 12px rgb(95 92 120 / 12%)',
    }
    return (
        <div>
        <div  className="container" >
            {/******************************Header ***************************************************/}
            <div className="jumbotron jumbotron-fluid bg-light mt-4 py-5">
             <div  className="py-5">
                 <img className="float-lg-end rounded-sm" style={styleImg1} alt="banner-1" src={banner1}></img> 
                <div className="w-50 px-5 mb-4" id='banner1' >
                <h1 className="text-secondary">Let's  Check and Optimise your website! </h1>
                <p className="text-lg text-muted" >Ignite the most powerfull growth engine you have ever built for your company</p>
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
            </div>
            {/***********************Header **************/}

            {/****************************Card-layout section ************************************/}
            <div className="my-5" >
               <div className="row box d-flex justify-content-around flex-nowrap" >
                <div className="col-lg-3" >{/******************card-1 */}
                <div className="card border border-light text-center" style={boxstyle1} >
                   <div className="card-body">
                    <p className="card-img" > <img src={service1} alt="service1.svg"></img> </p>
                    <h5 className="card-title text-secondary" >SEO Consultancy</h5>
                    <p className="card-text " > We help you define your SEO objective & develop a realistic strategy  with you</p>
                    <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                   </div>
                </div>
                </div> {/* card-1  */}

               <div className="col-lg-3" >{/*****************  card-2  */}
                <div className="card border border-light text-center py-3 px-3 box" style={boxstyle1} >
                  <div className="card-body">
                    <p className="card-img" > <img src={service2} alt="service2.svg"></img></p>
                    <h5 className="card-title text-secondary " >Content Marketing</h5>
                    <p className="card-text" > We help you define your SEO objective & develop a realistic strategy with you</p>
                    <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                  </div>
                </div> 
                </div>{/* card-2  */}

                <div className="col-lg-3" >{/************ card-3  */}
                <div className="card border border-light text-center box" style={boxstyle1}>
                    <div className="card-body" >
                      <p className="card-img" > <img src={service3} alt="service3.svg"></img></p>
                      <h5 className="card-title text-secondary " >Keyword Research</h5>
                      <p className="card-text" > We help you define your SEO objective & develop a realistic strategy with you</p>
                      <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                    </div>
                </div>
                </div>{/* card-3  */}
                </div>
            </div> 
            {/*******card-layout section ************/}
            {/******************************About Us ***************************************************/}
                 <div className="my-5 py-5 clearfix" >
                   
                    <div className="float-start w-50" >
                       <div>
                              <div className="subhead" >ABOUT US</div>
                                <h2 className="text-secondary w-75" > The number #1 SEO Service Company </h2>
                                <div className="divider" ></div>
                       </div> 
                       <div>
                       </div>
                        <div className="text-muted py-3" >
                            <p>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          <p>  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                        </div>
                        <div>
                              <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                        </div>
                   </div>
                   <div className="float-end w-50" >
                       <p><img src={frame1} alt="man sitting and pressing a pc" ></img></p>
                   </div>
                    
                </div>
                {/**********About Us ************/}
        </div>
        {/******************************Our Services ***************************************************/}
            <div className="bg-light" >
            <div className="container py-5" >
                <div className="text-center pt-5 pb-4" >
                     <p className="subhead" >OUR SERVICES</p>
                    <p className="text-secondary  h2" >How SEO Team Can Help</p>
                    <p className="divider mx-auto" ></p>
                </div>
                <div className="row row-cols-4 d-flex justify-content-around flex-nowrap text-sm " >{/***************First Group */}
                <div className="col text-center py-4 px-2" >{/******col1 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/******col1 */}
                
                <div className="col text-center py-4 px-2" >{/******col2 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col2 */}

                <div className="col text-center py-4 px-2" >{/******col3 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col3 */}

                <div className="col text-center py-4 px-2">{/******col4 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col4 */}
                </div>{/****************First Group End */}
                
                <div className="row row-cols-4 d-flex justify-content-around flex-nowrap text-sm "  >{/************************Second Group ***********/}
                <div className="col text-center py-4 px-2" >{/******col1 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col1 */}

                <div className="col text-center py-4 px-2" >{/******col2 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col2 */}

                <div className="col text-center py-4 px-2" >{/******col3 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col3 */}

                <div className="col text-center py-4 px-2" >{/******col4 */}
                  <div>
                     <span className="bg-white rounded py-3 px-3 rounded-circle" > <IoIosBusiness className=" mt-2 img1" /> </span>
                  </div> 
                <div>
                    <p className="h5 text-dark py-1 ">OnSite SEO</p>
                     <p className="text-muted">We analyse your website's structure, internal architecture & other key</p>
                </div>
                </div>{/**col4 */}
                </div>
                
             </div>   

            </div>
            {/***********Our Services *********/}
            <div>
                <div>
                 <label >Check your Website SEO:</label>
                 <input placeholder="E.g google.com" type="text"> </input>
                </div>
            </div>
        </div>
    )
}
export default Home
