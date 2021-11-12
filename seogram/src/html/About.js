import React from 'react';
import Jumbo from './Parts/Jumbo.js';
import AboutUs from './Parts/AboutUs.js';
import Pricing from './Parts/Pricing.js';
import Footer from './Parts/Footer.js';

function About() {
    return (
        <>
            <Jumbo name="About" service="About Us" />
            <AboutUs/>
            <Pricing/>
            <Footer/>
        </>
    )
}

export default About
