import React from "react";
import './styles.css'

import Header from '../../components/Header'

import Hero from  '../../components/ComponentsHome/Hero'
import Advantages from  '../../components/ComponentsHome/Advantages'
import Banner from "../../components/ComponentsHome/Banner";
import Facilities from "../../components/ComponentsHome/Facilities";

import Footer from '../../components/Footer'

export default props=>
    <>
    <section className="bannerHeader">
        <Header />        
        <Hero />
    </section>
        <Advantages />
        <Banner />
        <Facilities />
        
        <section className="advantages-2">advantages-2</section>
        <section className="faq">faq</section>
        <section className="download">Download</section>



        
        

        <Footer />
    </>
