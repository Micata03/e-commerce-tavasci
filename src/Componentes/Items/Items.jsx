import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Items.css';



const Items = ({ name, image, price, stock }) => {
  const onAdd = (cant) => {
    alert(`Has agregado ${cant} Labial`);
  };

  return (
    <article className="contact-cards">
     <aside className ="contact-card">   
      <img className="product-card__image" src={image} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
      </aside>
    </article>
  );
};

export default Items;