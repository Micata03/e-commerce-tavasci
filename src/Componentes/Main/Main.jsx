import React from 'react'
import './Main.css'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Main() {
    return (
        <><NavBar />
        <ItemListContainer greetings ={"Bienvenido a mi tienda"} /></>
    )
}

export default Main
