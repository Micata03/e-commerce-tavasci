import React from "react";
import  ItemDetail  from "../ItemDetail/ItemDetail";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    

    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        
        obtenerDatos()
        setTimeout(() =>{
            setLoading(false)
        }, 2000)
    }, [])

   const { id } = useParams();

    const obtenerDatos = async() =>{
      const data = await fetch(`https://fakestoreapi.com/products/${id}`)
      const  item = await data.json()
      
      setItems(item)
  }


    return (
        <>
        {
            loading ?
            <Loader
            type="Puff"
            color="#ccc"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
        :
        
          <ItemDetail
            key={items.id}
            title={items.title}
            description={items.description}
            price={items.price}
            stock={items.id}
            image={items.image}/>
    
        }
        

       </> 

    )

}

export default ItemDetailContainer