import React from "react";
import './styles.css'

import Header from '../../components/Header'

import Hero from  '../../components/ComponentsHome/Hero'
import Advantages from  '../../components/ComponentsHome/Advantages'

import Footer from '../../components/Footer'

export default props=>
    <>
    <section className="bannerHeader">
        <Header />        
        <Hero />
    </section>
        <Advantages />
        <section className="banner">banner</section>
        <section className="facilities">facilities</section>
        <section className="advantages-2">advantages-2</section>
        <section className="faq">faq</section>
        <section className="download">Download</section>



        
        

        <Footer />
    </>
