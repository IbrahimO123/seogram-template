import React from 'react';

function Navigate() {


    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white position-sticky top-0 start-0 z-2">
      <div className="container">
        <a href="####" className="navbar-brand">Seo<span className="per1">Gram.</span></a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto justify-content-around">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn bg text-white ml-lg-2" href="/blog">Free Analytics</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
        </>
    )
}


export default Navigate;