import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../Items/Items.css'
import {Link} from 'react-router-dom'




const ItemDetail =({ title, image, price, description }) => {

  

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
                <li><b>Descripcion:</b> {description}</li>
                <li><b>Price:</b> $ {price}</li>
               
                
               <ItemCount  onAdd={onAdd} initial={1} />
               <Link to={`/`} className= "btn" >
                    Volver </Link> 
            </ul>
        </div>
       
    </div>
    </section>
    )
};

export default ItemDetail;