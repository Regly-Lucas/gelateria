import React from "react";
import './topo.css'
import { BrowserRouter, Link } from "react-router-dom";

export default function Topo() {
    return (
      
            <header className="flex">
                <div className="header-container flex">
                    <img src="./assets/logo.png" alt="" />
                    <nav className="flex">
                        <Link to='/'>Home</Link>
                        <Link to='./sabores'>Sabores</Link>
                        <Link to='./sobre'>Sobre</Link>
                    </nav>
                </div>
            </header>
        
    )
}