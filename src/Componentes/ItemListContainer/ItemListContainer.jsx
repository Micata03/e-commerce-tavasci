import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

import './ItemListContainer.css';




const ItemListContainer = ({greetings}) => {
 

  return (
    <section className="container">
      <h1>{greetings}</h1>
      <ItemDetailContainer/>
     
    </section>
  );
};

export default ItemListContainer;
