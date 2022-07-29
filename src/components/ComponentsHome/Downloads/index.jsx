import React from "react";
import './styles.css'

import Phone from '../../../assets/imgs/phone.png'
import PlayStory from '../../../assets/icons/google-play-badge.png'
import AppleStory from '../../../assets/icons/App-Store-Badge.png'



export default props =>
    <section className="download d-flex flex-wrap">
       <img src={Phone} alt="" className="img-primary" />
       <div className="downloadTitle d-flex flex-column align-items-center justify-content-center ">
            <h2>Baixe nosso app</h2>
            <p>Vem fazer parte da comunidade calin.</p>
            <p>Facilite sua forma de pagar e receber dinheiro e ainda aproveite um universo de vantagens.</p>
            <div>
                <img src={PlayStory} alt="" />
                <img src={AppleStory} alt="" />
            </div>
       </div>
    </section>