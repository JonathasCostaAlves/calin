import React from "react";
import './styles.css'

import Header from '../../components/Header'

import Hero from  '../../components/ComponentsHome/Hero'
import Advantages from  '../../components/ComponentsHome/Advantages'
import Banner from "../../components/ComponentsHome/Banner";
import Facilities from "../../components/ComponentsHome/Facilities";
import Advantages2 from "../../components/ComponentsHome/Advantages2";
import Faq from "../../components/ComponentsHome/Faq";
import Downloads from "../../components/ComponentsHome/Downloads";

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
    <section className="advantages-faq">
        <Advantages2 />
        <Faq />        
    </section>

        
        <Downloads />

        <Footer />
    </>
