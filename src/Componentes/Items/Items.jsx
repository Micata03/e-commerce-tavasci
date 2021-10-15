import React from 'react'
import './Items.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'




const Items = ({ product}) => {

  const { image, title, price, rating } = product
  

  const onAdd = (cant) => {
    alert(`Has agregado ${cant} `);

  };

  

  return (
    <section className="cards-container">
        <div className="card-container">
          

        <img src={image} alt={title} />
        <div className="description">
            <h3 className="titulo_card">{title}</h3>
            <ul>
                <li><b>Producto:</b> {title}</li>
                <li><b>Price:</b> $ {price}</li>
                
                <li><b>Stock:</b> {rating.count}</li>
                
                    <Link to={`/items/${product.id}`} className= "btn" >
                    Ver mas informacion </Link> 
                
               <ItemCount  onAdd={onAdd} initial={1} />
               </ul>
        </div>
       
    </div>
    </section>
    )
};

export default Items;