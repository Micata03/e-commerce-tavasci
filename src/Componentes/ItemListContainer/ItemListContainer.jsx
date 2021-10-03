import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'


function ItemListContainer({greetings}) {
    return (
        <div className="container">
            <h1>{greetings}</h1>
            <ItemCount/>
            
        </div>
    )
}

export default ItemListContainer
