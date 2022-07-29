import React from "react";
import './styles.css'

import Phone from '../../../assets/imgs/phone.png'
import PhoneMobile from '../../../assets/imgs/phone-mobile.png'
import PlayStory from '../../../assets/icons/google-play-badge.png'
import AppleStory from '../../../assets/icons/App-Store-Badge.png'



export default props =>
    <section className="download d-flex flex-wrap pt-5 justify-content-center">
        <img src={Phone} alt="imagem de smartphone | smartphone image" className="img-primary d-none d-lg-none d-xl-block d-xl-block" />

        <div className="downloadTitle d-flex flex-column   justify-conten-center justify-content-lg-start text-center text-sm-center text-md-start text-lg-start">
            <h2>Baixe nosso app</h2>
            <p>Vem fazer parte da comunidade calin.</p>
            <p>Facilite sua forma de pagar e receber dinheiro e ainda aproveite um universo de vantagens.</p>

            <img src={PhoneMobile} alt="imagem de smartphone | smartphone image" className="img-primary-mobile d-block d-sm-block d-lg-block d-xl-none d-xl-none" />

            <div className=" d-flex justify-content-center align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row mb-5">

                <img src={PlayStory} alt="icon play story" className="badgets" />
                <img src={AppleStory} alt="icon apple story" className="badgets" />

            </div>
        </div>
    </section>