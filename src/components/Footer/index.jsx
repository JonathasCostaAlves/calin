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
                <li><Link to="/constructor"  rel="noopener noreferrer">Início</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Sobre o Calin</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Nossos Valores</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Ética e Compliance</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Para Você</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Baixe o App</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Regulamentos</Link></li>
           </ul>
           <ul className="pr-3">
                <li><Link to="/constructor"  rel="noopener noreferrer">Parcele Boletos</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Pague com Calin</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Faça um Pix</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Rendimentos</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">PicPay Card</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Calin Card</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Baixe o App</Link></li>
           </ul>
           <ul className="pr-3">
                <li><Link to="/constructor"  rel="noopener noreferrer">Fale com a gente</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Ouvidoria</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Informações</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Privacidade</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Segurança</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Tarifas e Taxas</Link></li>
                <li><Link to="/constructor"  rel="noopener noreferrer">Blog</Link></li>
           </ul>

         </div>
  
    </footer>