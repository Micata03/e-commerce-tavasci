

import React from 'react'
import Loader from "react-loader-spinner";
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemListContainer/ItemListContainer.css'

const ItemDetailContainer = () =>{

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
        productos.map(product => <ItemDetail Key={product.id} product={product} />)
    
    }
        

       </> 

    )

}

export default ItemDetailContainer
