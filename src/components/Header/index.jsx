import React from "react";
import './styles.css'

import { Link } from "react-router-dom";


export default props => 
    <header className={`header d-flex justify-content-around align-items-center ${props.bg ? 'bgTrue' : ''}`}>
        <Link to="/" className="brand">Calin</Link>
        <nav className= 'navbar navbar-expand-lg ' >
            
            <div className="container-fluid ">        
      
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="negocios">Calin negócios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="cartoes">Cartões</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ajuda">Central de ajuda</Link>
                        </li>
                       
                    </ul>
                </div>
                

            </div>
       
        </nav>

    </header>
    