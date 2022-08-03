import React from "react";
import './styles.css'



export default props =>
    <section className="faq">
        <h2>Ficou alguma duvida?</h2>
        <p>Aqui estão algumas respostas que podem te ajudar</p>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="calin1">
                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        O que é a Calin? 
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="calin1" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">A Calin é uma carteira digital, HUUUM! Na verdade é uma nova forma de ver mundo facilitando sua relação com dinheiro, receba, pague, transfira tudo na palma da sua mão.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="calin2">
                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                       Como criar minha conta?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="calin2" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">É muito fácil!!!! Basta baixar o app para fazer o cadastro e pronto. Vamos validar os seus dados e o universo da Calin vai estar na palma da sua mão.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="calin3">
                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Preciso pagar alguma coisa ?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="calin3" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Não, você tem taxa ZERO livre de anuidade! Baixe o app</div>
                </div>
            </div>
            <div class="accordion-item">

                <h2 class="accordion-header" id="calin3">

                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#calin4" aria-expanded="false" aria-controls="flush-collapseThree">
                        Quais as taxas do cartão de crédito ?
                    </button>

                </h2>

                <div id="calin4" class="accordion-collapse collapse" aria-labelledby="calin3" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">ZERO taxas, ZERO anuidade é muito fácil, ainda se complicar parcelamos sua fatura com as melhores condições do mercado.</div>
                </div>

            </div>
         
          
        </div>
    </section>