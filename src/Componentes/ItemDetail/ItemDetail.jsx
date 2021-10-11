import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../Items/Items.css'





const ItemDetail = ({ product}) => {

  const { image, title, description,  price, rating } = product

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
                <li><b>Descripcion:</b>${description}</li>
                
                <li><b>Valoracion:</b> {rating.rate}</li>
                <li><b>Stock:</b> {rating.count}</li>
                
               <ItemCount  onAdd={onAdd} initial={1} />
            </ul>
            <button className="btn btn-card">Volver</button>
        </div>
       
    </div>
    </section>

      
      
  );
};

export default ItemDetail;