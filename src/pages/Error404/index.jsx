import React from "react";
import './styles.css'
import {Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import relax from '../../assets/imgs/rilex-img.png'

export default props =>
    <>
        <Header bg={true} />
        <main className="pageError d-flex flex-column justify-content-center align-items-center text-center">
            <h1>Calin</h1>
            <img src={relax} alt="" />
            <h2 className="mb-5"> Pagina em construção em breve novidades para você! <Link to='/'>ir para inicio</Link></h2>
         

        </main>
        <Footer />
    </>

