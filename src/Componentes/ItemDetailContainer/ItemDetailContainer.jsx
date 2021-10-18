import React from "react";
import  ItemDetail  from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";
import items from '../Assets/AllData'



const ItemDetailContainer = () =>{

    

   
  

   const { id } = useParams();

  let { title, price, description, image } = items[id];

    return (
        <>
       
          <ItemDetail
            key={id}
            title={title}
            description={description}
            price={price}
            
            image={image}/>
    
        
        

       </> 

    )

}

export default ItemDetailContainer