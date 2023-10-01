import react from "react";
import './sabores.css'
export default function Sabores() {
    return (
        <main>
            <section className="banner flex">
                <div className="banner-container sabores flex">
                    <img src="./assets/banner-sabores.jpg" alt="" />
                    <h1>Nossos Sabores</h1>
                </div>
            </section>

            <section className="secao-sabores">
                <div className="limita-largura">
                    <h1>SABORES DE SORVETE</h1>
                    <div className="container-cards flex">
                        <div className="card flex">
                            <img src="./assets/sabor-oreo.png" alt="" />
                            <h2>Sorvete de Oreo</h2>
                            <p>Delicioso sorvete sabor Oreo.<br /> Uma explosão de sabor.</p>
                        </div>
                        <div className="card flex">
                            <img src="./assets/sabor-pistache.png" alt="" />
                            <h2>Sorvete Pistache</h2>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className="card flex">
                            <img src="./assets/sabor-cookies-avela.png" alt="" />
                            <h2>Sorvete Cookies & Avelã</h2>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className="card flex">
                            <img src="./assets/sorbet-kiwi.png" alt="" />
                            <h2>Sorvete de Kiwi</h2>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className="card flex">
                            <img src="./assets/sorbet-morango.png" alt="" />
                            <h2>Sorvete de Morango</h2>
                            <p>Sorvete de Morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className="card flex">
                            <img src="./assets/sorbet-limao.png" alt="" />
                            <h2>Sorvete de Limão Siciliano</h2>
                            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}