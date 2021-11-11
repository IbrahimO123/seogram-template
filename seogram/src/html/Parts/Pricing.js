import React from 'react';


const boxstyle1 ={
    boxShadow: '0 3px 12px rgb(95 92 120 / 12%)',
   }

function Pricing() {
    return (
        <>
            {/*********************************** PRICING PLAN *********************************/}
            <div className="price1" >
            <div className="container" >
                  <div className="text-center pt-5 pb-2" >
                          <p className="subhead" >PRICING PLAN</p>
                          <p className="text-secondary  h2" >Choose plan the right for you</p>
                          <p className="divider mx-auto" ></p>
                      </div>
                         <div className="row mt-5" >
                              <div className="col-lg-3 text-center price2" style={boxstyle1} >{/*******Price Plan 1 */}
                              <div className=" border1 pb-2" >
                                <p className="pack1" >Basic</p>
                                <div className="" > 
                                 <span className="sup1" >$</span><h1 className="d-inline-block pack3" >39.<span className="pack2" >99</span></h1>
                                </div>
                                 <h5 className="per1" >PER MONTH</h5>
                                </div>
                                <div className="card-body border1" > 
                                <p>25 Analytics<span className="pack1" > Campaign</span></p>
                                <p>1,300 Change<span  className="pack1" > Keywords</span></p>
                                <p>Social Media<span  className="pack1" > Reviews</span></p>
                                <p>1 Free <span  className="pack1" > Optimization</span></p>
                                <p>24/7 <span  className="pack1" >Support</span></p>
                                </div>
                                <div className="py-4 mt-2" >
                                  <a href="##" className="btn form-control btn1 btn-lg" >Subscribe</a>
                                </div>
                              </div>{/*******Price Plan 1 ************/}
                                          
                                {/**************Price Plan 2 ********************/}
                              <div className="col-lg-3 text-white text-center price2 bg" style={boxstyle1} >
                              <div className=" border1 pb-2" >
                                <p className="pack1" >Standard</p>
                                <div className="" > 
                                 <span className="sup1" >$</span><h1 className="d-inline-block pack3" >59.<span className="pack2" >99</span></h1>
                                </div>
                                 <h5>PER MONTH</h5>
                                </div>
                                <div className="card-body border1" > 
                                <p>25 Analytics<span className="pack1" > Campaign</span></p>
                                <p>1,300 Change<span  className="pack1" > Keywords</span></p>
                                <p>Social Media<span  className="pack1" > Reviews</span></p>
                                <p>1 Free <span  className="pack1" > Optimization</span></p>
                                <p>24/7 <span  className="pack1" >Support</span></p>
                                </div>
                                <div className="py-4 mt-2" >
                                  <a href="##" className="btn form-control btn1 btn-lg" >Subscribe</a>
                                </div> 
                              </div>{/*************** Price Plan 2 **********/}

                                  {/*****************************Price Plan 3 ***********************/}
                              <div className="col-lg-3 text-center price2" style={boxstyle1} >
                              <div className=" border1 pb-2" >
                                <p className="pack1" >Professionals</p>
                                <div className="" > 
                                 <span className="sup1" >$</span><h1 className="d-inline-block pack3" >99.<span className="pack2" >99</span></h1>
                                </div>
                                 <h5 className="per1" >PER MONTH</h5>
                                </div>
                                <div className="card-body border1" > 
                                <p>25 Analytics<span className="pack1" > Campaign</span></p>
                                <p>1,300 Change<span  className="pack1" > Keywords</span></p>
                                <p>Social Media<span  className="pack1" > Reviews</span></p>
                                <p>1 Free <span  className="pack1" > Optimization</span></p>
                                <p>24/7 <span  className="pack1" >Support</span></p>
                                </div>
                                <div className="py-4 mt-2" >
                                  <a href="##" className="btn form-control btn1 btn-lg" >Subscribe</a>
                                </div>
                              </div>{/**********************Price Plan 3 ************/}
                              </div>
                      
            </div> {/*********** PRICING PLAN ******************/}
            </div>
        </>
    )
}

export default Pricing
