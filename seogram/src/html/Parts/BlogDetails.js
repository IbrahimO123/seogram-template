import React from 'react';
import blog1 from '../../assets/img/blog/blog-1.jpg';
import blog2 from '../../assets/img/blog/blog-2.jpg';
import blog3 from '../../assets/img/blog/blog-3.jpg';


function BlogDetails() {

    const blogImg = {
        width: '100%',
        height: '50%'
     }
 
     const boxstyle1 ={
      boxShadow: '0 3px 12px rgb(95 92 120 / 12%)',
     }
    return (
        <>
        {/****************************Blog section ************************************/}
        <div className="my-3" >
                 <div className="container" >
                     <div className="row mt-5" >
                      <div className="col-lg-4 py-3" >{/******************card-1 ******************/}
                      <div className="card border border-light blog" style={boxstyle1} >
                      <p className="card-img img-fluid img-top blog-img" > <img style={blogImg} src={blog1} alt="service3.svg"></img></p>
                         <div className="card-body">
                          <h5 className="card-title text-secondary" >Source of Content Inspiration</h5>
                          <div className="card-link text-muted post-date" > Posted on <a href="##" className="text-decoration-none" >27 Jan 2020</a></div>
                         </div>
                      </div>
                      </div> {/*********************  card-1  ***************/}
      
                         {/*****************  card-2  ***************************/}
                     <div className="col-lg-4 py-3" >
                      <div className="card border border-light box blog" style={boxstyle1} >
                      <p className="card-img img-fluid img-top blog-img" > <img style={blogImg} src={blog2} alt="service3.svg"></img></p>
                        <div className="card-body">
                          <h5 className="card-title text-secondary " >Source of Content Inspiration</h5>
                          <div className="card-link text-muted post-date" >Posted on <a href="##" className="text-decoration-none" >27 Jan 2020</a></div>
                        </div>
                      </div> 
                      </div>{/********************** card-2  *************************/}
      
                      {/*************************** card-3  ****************************/}
                      <div className="col-lg-4 py-3" >
                      <div className="card border border-light box blog" style={boxstyle1}>
                      <p className="card-img img-fluid img-top blog-img" > <img style={blogImg} src={blog3} alt="service3.svg"></img></p>
                          <div className="card-body" >
                            <h5 className="card-title text-secondary" >Source of Content Inspiration</h5>
                            <div className="card-link text-muted post-date" >Posted on <a href="##" className="text-decoration-none" >27 Jan 2020</a></div>
                          </div>
                      </div>
                      </div>{/******************* card-3  ****************************/}
                      </div>
                      </div>
                  </div> 
                  {/*******Blog section ************/}
      
             </>
    )
}

export default BlogDetails
