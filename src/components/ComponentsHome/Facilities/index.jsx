import React from "react";
import './styles.css'

import Pix from '../../../assets/imgs/pix.png'
import Card from '../../../assets/imgs/card.png'
import Boleto from '../../../assets/imgs/boleto.png'



export default props =>
    <section className="facilities d-flex flex-column justify-content-center ">
        <h2>Descubra um universo de facilidades</h2>

        <div className="ease d-flex justify-content-center flex-wrap align-items-center">

            <img src={Pix} alt="Aria Pix - Mulher sorrindo com a Calin | Pix area - women smiling with Calin" />

            <div className="easeTitle d-flex flex-column align-items-center align-items-lg-start align-items-xl-start">
                <h3>Pix</h3>
                <p>Transfira e receba dinheiro para qualquer conta em questão de segundos usando a sua carteira calin.</p>
                <button className="btn">BAIXE O APP</button>
            </div>

        </div>

        <div className="ease d-flex justify-content-center flex-wrap ">


            <div className="easeTitle d-flex flex-column  align-items-center align-items-lg-start align-items-xl-start order-2 order-sm-2 order-xl-1 ">
                <h3>Boleto</h3>
                <p>Transfira e receba dinheiro para qualquer conta em questão de segundos usando a sua carteira calin.</p>
                <button className="btn">BAIXE O APP</button>
            </div>
            
            <img src={Boleto} alt="Area Boleto - Homem sorrindo com a Calin | Pix area - man smiling with Calin " className="order-1 order-sm-1 order-xl-1"/>


        </div>

        <div className="ease d-flex justify-content-center flex-wrap">
            <img src={Card} alt="area do cartão - o cartão da diverdade Calin | card area - the diversity card Calin" />

            <div className="easeTitle d-flex flex-column  align-items-start align-items-center align-items-lg-start align-items-xl-start">
                <h3>Cartão de crédito</h3>
                <p>Peça já o seu cartão sem anuidade e aproveite para assinar aquele streaming que você tanto queria.</p>
                <button className="btn">BAIXE O APP</button>
            </div>
        </div>

    </section>