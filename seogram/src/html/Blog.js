import React from 'react'
import Jumbo from './Parts/Jumbo.js';
import Footer from './Parts/Footer.js';
import BlogDetails from './Parts/BlogDetails.js';
import BlogDetails2 from './Parts/BlogDetails2.js';
function Blog() {
    return (
        <>
         <Jumbo name="Blog" service="Blog" />  
         <BlogDetails/>
         <BlogDetails2/>
         <BlogDetails/>
         <Footer/> 
      </>
    )
}

export default Blog
