import React from 'react';
import service1 from '../../assets/img/services/service-1.svg';
import service2 from '../../assets/img/services/service-2.svg';
import service3 from '../../assets/img/services/service-3.svg';

function Content() {
    const boxstyle1 ={
     boxShadow: '0 3px 12px rgb(95 92 120 / 12%)',
    }
return (
    <>
    {/****************************Card-layout section ************************************/}
    <div className="my-5 py-5 overflow-hidden" >
            <div className="container" >
               <div className="row" >
                <div className="col-lg-4" >{/******************card-1 *********/}
                <div className=" border border-light text-center card2" style={boxstyle1} >
                   <div className="card-body">
                    <p className="card-img" > <img src={service1} alt="service1.svg"></img> </p>
                    <h5 className="card-title text-secondary" >SEO Consultancy</h5>
                    <p className="card-text " > We help you define your SEO objective & develop a realistic strategy  with you</p>
                    <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                   </div>
                </div>
                </div> {/****************  card-1  **************/}
                 
                 {/***********************************  card-2   *****************************/}
               <div className="col-lg-4" >
                <div className="border border-light text-center card2" style={boxstyle1} >
                  <div className="card-body">
                    <p className="card-img" > <img src={service2} alt="service2.svg"></img></p>
                    <h5 className="card-title text-secondary " >Content Marketing</h5>
                    <p className="card-text" > We help you define your SEO objective & develop a realistic strategy with you</p>
                    <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                  </div>
                </div> 
                </div>{/*********************  card-2  **********************/}
                 
                 {/*********************************** card-3  ***************************************/}
                <div className="col-lg-4" >
                <div className="border border-light text-center card2" style={boxstyle1}>
                    <div className="card-body" >
                      <p className="card-img" > <img src={service3} alt="service3.svg"></img></p>
                      <h5 className="card-title text-secondary " >Keyword Research</h5>
                      <p className="card-text" > We help you define your SEO objective & develop a realistic strategy with you</p>
                      <p className="card-link" ><button className="btn btn-secondary bg" >Read More</button></p>
                    </div>
                </div>
                </div>{/***************  card-3  **********************/}
                </div>
                </div>
            </div> 
            {/*******card-layout section ************/}
    </>
)
}
export default Content