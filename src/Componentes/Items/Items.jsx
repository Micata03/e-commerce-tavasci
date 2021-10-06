import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Items.css';




const Items = ({ product}) => {

  const { image, title, price, rating } = product

  const onAdd = (cant) => {
    alert(`Has agregado ${cant} `);

  };

  

  return (
    <section className="cards-container">
        <div className="card-container">
          

        <img src={image} alt={title} />
        <button className="btn btn-card">Ver mas informacion</button>
        <div className="description">
            <h3 className="titulo_card">{title}</h3>
            <ul>
                <li><b>Producto:</b> {title}</li>
                <li><b>Price:</b> $ {price}</li>
                
                <li><b>Stock:</b> {rating.count}</li>
                
               <ItemCount  onAdd={onAdd} initial={1} />
            </ul>
        </div>
       
    </div>
    </section>

      
      
  );
};

export default Items;