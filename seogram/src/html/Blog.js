import React from 'react'
import Jumbo from './Parts/Jumbo.js';
import Footer from './Parts/Footer.js';
import BlogDetails from './Parts/BlogDetails.js';
import BlogDetails2 from './Parts/BlogDetails2.js';
import {RiFilter3Fill} from 'react-icons/ri'
function Blog() {
    return (
        <>
        
         <Jumbo name="Blog" service="Blog" /> 
         {/********** Filters Search ***************/}
         <div className="container py-4 my-4">
         <div className="row">
        <div className="col-sm-10">
          <form action="#" className="form-search-blog">
            <div className="input-group">
              <div className="input-group-prepend fs-4">
                <select id="categories" className="custom-select btn btn-lg border bg-light">
                  <option>All Categories</option>
                  <option value="travel">Travel</option>
                  <option value="lifestyle">LifeStyle</option>
                  <option value="healthy">Healthy</option>
                  <option value="food">Food</option>
                </select>
              </div>
              <input type="text" placeholder="Enter Keywords..." className="form-control"  ></input>
            </div>
          </form>
        </div>
        <div className="col-sm-2  text-md-right">
          <button className="btn btn-md btn-secondary px-4 ms-5">Filter <span><RiFilter3Fill/></span></button>
        </div>
      </div>
      </div>
        {/********** Filters Search ***************/}
         <BlogDetails/>
         <BlogDetails2/>
         <BlogDetails/>
         <Footer/> 
      </>
    )
}

export default Blog
