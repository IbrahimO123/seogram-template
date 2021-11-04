import React from 'react';
import frame1 from '../../assets/img/about_frame.png';

function AboutUs() {
    return (
        <>
            {/******************************About Us ***************************************************/}
            <div className="my-5 py-5" >
                   <div className="container" >
                   <div className="row align-items-center" >
                    <div className="col-lg-6 py-3" >
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
                   <div className="col-lg-6 py-3" >
                       <p><img src={frame1} alt="man sitting and pressing a pc" ></img></p>
                   </div>
                   </div>
                   </div>
                </div>
                {/**********About Us ************/} 
        </>
    )
}

export default AboutUs
