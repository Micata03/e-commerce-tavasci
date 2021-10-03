import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import "./NavBar.css"


const navbar = ({carrito}) => {
    return (
        <header className="header">
        <section className="container">
        <Cartwidget  carrito={carrito}/>
           
            <nav className="menu">
                
                <a href="#alimentos">Alimentos</a>
                <a href="#accesorios">Accesorios</a>
                <a href="#ropa">Ropa</a>
                <a href="#sale">Sale!</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </section>
    </header>
    )
}

export default navbar