import React from "react";
import { Link } from 'react-router-dom'
import './styles.css'

import Twitter from '../../assets/icons/twitter-icon.svg'
import Facebook from '../../assets/icons/facebook-icon.svg'
import LinkedIn from '../../assets/icons/linkedin-icon.svg'
import Tiktok from '../../assets/icons/tiktok-icon.svg'


export default props =>
    <footer className="footer">
        <div className="footerTitle d-flex justify-content-evenly align-items-center flex-wrap">
            <section className="footerBrand d-flex align-items-center flex-column "  >
                <h4>Calin</h4>
                <span>#Simplificaê</span>
            </section>

            <section className="socialMedia mt-5">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter icon" /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook icon" /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn icon" /></a>
                <a href="https://www.tiktok.com/    " target="_blank" rel="noopener noreferrer"><img src={Tiktok} alt="Tiktok icon" /></a>
            </section>

        </div>
        <div className="footerBody  d-flex justify-content-around align-items-center flex-wrap ">
           <ul className="pr-3">
                <li><a href="/constructor"  rel="noopener noreferrer">Início</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Sobre o Calin</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Nossos Valores</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Ética e Compliance</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Para Você</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Baixe o App</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Regulamentos</a></li>
           </ul>
           <ul className="pr-3">
                <li><a href="/constructor"  rel="noopener noreferrer">Parcele Boletos</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Pague com Calin</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Faça um Pix</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Rendimentos</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">PicPay Card</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Calin Card</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Baixe o App</a></li>
           </ul>
           <ul className="pr-3">
                <li><a href="/constructor"  rel="noopener noreferrer">Fale com a gente</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Ouvidoria</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Informações</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Privacidade</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Segurança</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Tarifas e Taxas</a></li>
                <li><a href="/constructor"  rel="noopener noreferrer">Blog</a></li>
           </ul>

         </div>
  
    </footer>