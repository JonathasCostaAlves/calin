import React, { useEffect, useState } from "react";
import './styles.css'

import Discount from '../../../assets/icons/percent-icon.svg'
import Card from '../../../assets/icons/cardCred-icon.svg'
import Lock from '../../../assets/icons/lock-icon.svg'
import Money from '../../../assets/icons/money-icon.svg'
import NavIcon from '../../../assets/icons/nav-icon.png'

const typesCard = [
    { title: 'Desconto', icon: Discount, alt: "discount icon - muito mais desconto para você" },
    { title: 'Cartão', icon: Card, alt: "card icon - Seu cartão esta aqui " },
    { title: 'Segurança', icon: Lock, alt: "lock icon - Muito mais segurança com a Calin" },
    { title: 'Dinheiro que rende', icon: Money, alt: "Money icon - Rendo muito mais que a poupança" }
]

export default function CardsMobile() {

    const [count, setCount] = useState(0) 

    const [type, setType] = useState(typesCard[count])


useEffect ( () =>{
    const interval = setTimeout(() => {

        setCount(count+1)
        console.log(count)
        setType(typesCard[count])
        if(count>=3) setCount(0)

     }, 5000);
},[count]) 

function navBanner(position = 0 ){  
        setType(typesCard[count])
        setCount(parseInt(position))  
}

    return (
        <section className="cardsMobile d-flex flex-column justify-content-center  align-items-center d-md-flex d-lg-none d-xl-none d-xxl-none">
            <div className="card d-flex justify-content-center align-items-center text-center ">
                <h5>{type.title}</h5>
                <img src={type.icon} alt={type.alt} />
            </div>

            <div className="controls d-flex justify-content-center align-items-center text-center">
                <button onClick={e => navBanner(0)} ><img src={NavIcon} alt="item de navegação em vanatgens da Calin" /></button>
                <button onClick={e => navBanner(1)} ><img src={NavIcon} alt="item de navegação em vanatgens da Calin" /></button>
                <button onClick={e => navBanner(2)} ><img src={NavIcon} alt="item de navegação em vanatgens da Calin" /></button>
                <button onClick={e => navBanner(3)} ><img src={NavIcon} alt="item de navegação em vanatgens da Calin" /></button>                
            </div>

        </section>
    )

}




