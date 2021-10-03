import React, { useState } from 'react'

import './Main.css'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemCount from '../ItemCount/ItemCount'


function Main() {

    // Carrito de compras !! 
    // Muestra la cantidad de articulos que se agregaron
    const [carrito,setCarrito] = useState(0); 
    const addToCardWidget = (articles) => {
        setCarrito(carrito + articles)
    }
    return (
        <><NavBar 
        carrito={carrito} 
        addToCardWidget={addToCardWidget}
        
        />
        <ItemCount stock={20}/>
        <ItemListContainer greetings ={"Bienvenido a mi tienda"} /></>
    )
}

export default Main
