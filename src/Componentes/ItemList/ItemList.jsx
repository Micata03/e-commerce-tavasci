import React from "react";
import  Items  from "../Items/Items"
import Loader from "react-loader-spinner";

const ItemList = () =>{

    

    const [productos, setProductos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        
        obtenerDatos()
        setTimeout(() =>{
            setLoading(false)
        }, 2000)
    }, [])

    const obtenerDatos = async() =>{
        const data = await fetch('https://fakestoreapi.com/products')
        const  product = await data.json()
        
        setProductos(product)
    }

    return (
        <>
        {
            loading ?
            <Loader
            type="Puff"
            color="#d694b2"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
        :
        productos.map(product => <Items Key={product.id} product={product} />)
    
    }
        

       </> 

    )

}

export default ItemList