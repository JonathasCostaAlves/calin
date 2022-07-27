import React from "react";
import './styles.css'


export default props => 
    <header className="header d-flex justify-content-around align-items-center">
        <a href="#" className="brand">Calin</a>
        <nav className="navbar navbar-expand-lg">
            
            <div className="container-fluid ">        
      
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Calin negócios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cartões</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Central de ajuda</a>
                        </li>
                       
                    </ul>
                </div>
                

            </div>
       
        </nav>

    </header>
    