import React from "react";
import './styles.css'

import Rilex from '../../../assets/imgs/rilex-img.png'



export default props =>
    <section className="banner d-flex justify-content-center flex-wrap ">

        <img src={Rilex} alt=" Mulher aproveitando o sol - Facilidades da Calin |Facilities Calin, woman enjoying the sun" className="order-2 order-sm-2 order-lg-1 order-xl-1"/>

        <div className="bannerTitle order-1 order-sm-1 order-lg-2 order-xl-2 text-center text-md-start">
            <span>#simplificaê</span>
            <h2>com a calin é assim</h2>
            <p >Aqui você descomplica a forma como lida com o seu dinheiro e tem mais tempo para fazer o que realmente ama.</p>
        </div>
    </section>