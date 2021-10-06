import React from 'react';
import  ItemList  from '../ItemList/ItemList';
import './ItemListContainer.css';




const ItemListContainer = ({greetings}) => {
 

  return (
    <section className="container">
      <h1>{greetings}</h1>
      <ItemList></ItemList>
     
    </section>
  );
};

export default ItemListContainer;
