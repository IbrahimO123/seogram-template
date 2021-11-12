import React from 'react'
import Jumbo from './Parts/Jumbo.js';
import Content from './Parts/Content.js';
import ServiceUs from './Parts/ServiceUs.js';
import Footer from './Parts/Footer.js';


function Service() {
    return (
        <>
        <Jumbo name="Services" service="Our Services" />
        <Content/>
        <ServiceUs/>
        <Footer/>       
        </>
    )
}

export default Service
