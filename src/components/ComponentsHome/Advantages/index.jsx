import React from "react";
import './styles.css'

import Discount from '../../../assets/icons/percent-icon.svg'
import Card from '../../../assets/icons/cardCred-icon.svg'
import Lock from '../../../assets/icons/lock-icon.svg'
import Money from '../../../assets/icons/money-icon.svg'

export default props =>
<section className="advantages d-flex justify-content-center align-items-center">

    <div className="card d-flex justify-content-center align-items-center">
        <h5>Desconto</h5>
        <img src={Discount} alt="discount icon - muito mais desconto para você " />
    </div>

    <div className="card d-flex justify-content-center align-items-center d-none d-sm-none d-lg-flex">
        <h5>Cartões</h5>
        <img src={Card} alt="discount icon - muito mais desconto para você " />
    </div>

    <div className="card d-flex justify-content-center align-items-center d-none d-sm-none d-lg-flex" >
        <h5>Segurança</h5>
        <img src={Lock} alt="discount icon - muito mais desconto para você " />
    </div>

    <div className="card d-flex justify-content-center align-items-center d-none d-sm-none d-lg-flex">
        <h5>Dinheiro que rende</h5>
        <img src={Money} alt="discount icon - muito mais desconto para você " />
    </div>
</section>