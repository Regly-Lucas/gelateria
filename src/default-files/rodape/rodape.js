import React from "react";
import './rodape.css'
export default function Rodape() {
    return (
        <footer className="flex">
            <div className="rodape-container flex">
                <img src="./assets/logo.png" alt="" />
                <div className="rodape-subcontainer flex">
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos,67 - RJ</p>
                </div>
                <div className="rodape-subcontainer flex">
                    <h3>Contato</h3>
                    <p>info@meucontato.com</p>
                </div>
                <div className="rodape-subcontainer flex">
                    <h3>Horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <p className="span">Galeteria. Orgulhosamente desenvolvido por<span> "Lucas Regly Marchitto"</span> 2023</p>
        </footer>
    )
}