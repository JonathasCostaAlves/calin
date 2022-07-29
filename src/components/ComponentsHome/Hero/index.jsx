import React from "react";
import './styles.css'

import Phone from '../../../assets/imgs/Smart-Phone-hero.png'



export default props =>
    <section className="hero d-flex justify-content-around text-center text-md-start  flex-wrap ">

        <div className="heroTitle d-flex flex-column  mt-5  order-2 order-sm-2 order-xs-2 order-md-2 order-lg-1">

            <h1>Calin, um universo de facilidades</h1>
            <p>Poupe tempo, dinheiro e ainda ganhe muito cashback</p>
            <button className="btn-call-to-action">BAIXE O APP</button>

        </div>

        <img src={Phone} alt="Image smartphone calin cashback"  className="mt-5  order-1 order-sm-1 order-xs-1 order-md-1 order-lg-2"/>


    </section>