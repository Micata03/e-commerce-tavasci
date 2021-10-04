import React from 'react'
import './Cartwidget.css'
import logo from '../Assets/logo.png'

function Cartwidget() {
   
    return (
        <div>
            <a href="carrito.html">
            <img src={logo} alt="carrito" className="logo-carrito" />
            <div className="cant-display">0</div>
            </a>
        </div>
    )
}

export default Cartwidget
