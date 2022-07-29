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
                    <div class="accordion-body">Leite de capivaris, leite de mula manquis sem cabeça.Interagi no mé, cursus quis, vehicula ac nisi.Diuretics paradis num copo é motivis de denguis.Quem num gosta di mim que vai caçá sua turmis!</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="calin2">
                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                       Como criar minha conta?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="calin2" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.Aenean aliquam molestie leo, vitae iaculis nisl.Si num tem leite então bota uma pinga aí cumpadi!Paisis, filhis, espiritis santis.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="calin3">
                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Preciso pagar alguma coisa ?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="calin3" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Quem manda na minha terra sou euzis!</div>
                </div>
            </div>
            <div class="accordion-item">

                <h2 class="accordion-header" id="calin3">

                    <button class="accordion-button collapsed accordion-custon" type="button" data-bs-toggle="collapse" data-bs-target="#calin4" aria-expanded="false" aria-controls="flush-collapseThree">
                        Quais as taxas do cartão de crédito ?
                    </button>

                </h2>

                <div id="calin4" class="accordion-collapse collapse" aria-labelledby="calin3" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Quem manda na minha terra sou euzis!</div>
                </div>

            </div>
         
          
        </div>
    </section>