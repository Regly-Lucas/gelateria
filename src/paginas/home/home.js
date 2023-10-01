import react from "react";
import './home.css'

export default function Home() {
    return (
        <main>
            <section className="banner flex">
                <div className="banner-container flex">
                    <img src="./assets/banner-home.png" alt="" />
                    <h1>Sorvete Artesanal</h1>
                </div>
            </section>

            <section className="secao-infos">
                <div className="infos-container flex">
                    <img src="./assets/banner-sabores.jpg" alt="" />
                    <div className="infos-subcontainer flex">
                        <div className="subtitle-paragrafo"> <h2>Nossos sabores</h2>
                            <p>Novos e deliciosos</p>
                        </div>
                        <span>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nosso produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</span>
                    </div>
                </div>
                <div className="infos-container segundo flex">
                    <div className="infos-subcontainer flex">
                        <div className="subtitle-paragrafo"> <h2>Nossos eventos</h2>
                            <p>Delicias com sorvete!</p>
                        </div>
                        <span> Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui conosco.</span>
                    </div>
                    <img src="./assets/eventos-image.jpg" alt="" />
                </div>
                <div className="infos-container flex">
                    <img src="./assets/sobre-image.jpg" alt="" />
                    <div className="infos-subcontainer subcontainer flex">
                        <div className="subtitle-paragrafo"> <h2>Sobre Nós</h2>
                            <p>Alegria em cada casquinha!</p>
                        </div>
                        <span>Venha tomar o melhor sorvete da região aqui com a gente!Nós estamos à anos no mercado produzindo oque tem de melhor para nossos clientes e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite do melhor atendimento e o melhor sorvete da cidade.</span>
                    </div>
                </div>
            </section>
        </main>
    )
}