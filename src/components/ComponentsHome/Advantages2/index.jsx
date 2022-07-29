import React from "react";
import './styles.css'

import CardSpotify from '../../../assets/imgs/spotify.png'
import CardAmazon from '../../../assets/imgs/amazon.png'
import CardQrcode from '../../../assets/imgs/qr-code.png'

import ArrowRigth from '../../../assets/icons/arrow-rigth.svg'
import ArrowLeft from '../../../assets/icons/arrow-left.svg'


export default props =>
<section className="advantages2 text-center"> 
    <h3 >Não para por aí</h3>
    <p>aqui você tambem encontra beneficios com outros parceiros</p>

    <div className="cards d-flex justify-content-center align-items-center ">
     

        <button className="d-none d-sm-none d-md-none d-lg-none d-xl-block"> <img src={ArrowLeft} alt="Card Spotify" /> </button>

        <img className="d-block" src={CardQrcode} alt="Card Spotify" />
        <img className="d-none d-sm-none d-md-block d-lg-block  d-xl-block" src={CardSpotify} alt="Card Spotify" />
        <img className="d-none d-sm-none d-md-none d-lg-block  d-xl-block" src={CardAmazon} alt="Card Spotify" />

        <button className="d-none d-sm-none d-md-none d-lg-none d-xl-block"> <img src={ArrowRigth} alt="Card Spotify" /> </button>

       
        
    </div>
</section>