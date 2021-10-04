import React from 'react'
import productFoto from '../Assets/labial.jpg'
import './ItemListContainer.css'
import Items from '../Items/Items'


function ItemListContainer({greetings}) {
    
    return (
        <div className="container">
            <h1>{greetings}</h1>
            
            <Items image={productFoto} name={'Labial Rosa'} price={240} stock={17} />
            
        </div>
    )
}

export default ItemListContainer
