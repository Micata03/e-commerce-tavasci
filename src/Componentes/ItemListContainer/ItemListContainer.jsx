import React from 'react';
import ItemList from '../ItemList/ItemList'







const ItemListContainer = ({greetings}) => {



 

  return (
    <section >
      <h1>{greetings}</h1>

      
      
      <ItemList/>
    
     
    </section>
  );
};

export default ItemListContainer;


