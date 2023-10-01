import react from "react";
import './sobre.css'
export default function Sobre() {
    return (
        <main>
            <section className="banner flex">
                <div className="banner-container sabores flex">
                    <img src="./assets/banner-sobre.png" alt="" />
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className="secao-sobre-nos">
                <div className="limita-largura">
                    <div className="subtitle-paragrafo sobre-paragrafo">
                        <h2>Sobre Nós</h2>
                        <p>Nós simplesmente amamos sorvete!</p>
                    </div>
                    <div className="paragrafos">
                        <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final de sorvete. Vendemos tanto para varejo como para atacado.</p>
                        <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                    </div>
                </div>
                <div className="sobre-imgs">
                <img src="./assets/sobre-image.jpg" alt="" />
                <img src="./assets/sorveteria.jpg" alt="" />
                </div>
            </section>
        </main>
    )
}