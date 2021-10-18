import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './Items.css'

function Items ({menuItem}) {
    const onAdd = (cant) => {
        alert(`Has agregado ${cant} `);
    
      };
    return (
        <div className="item">
            {menuItem.map((item)=>{
                return <div className="cards-container" key={item.id}>
                    <div className="card-container">
                        <img src={item.image} alt="foto1"/>
                        <h2 >{item.title}</h2>
                        <p>${item.price}</p>
                        <p>Stock:{item.rating.count}</p>
                        <Link to={`/items/${item.id}`} className= "btn" >
                    Ver mas informacion </Link> 
                    <ItemCount  onAdd={onAdd} initial={1} />
                    </div>
                    
                </div>
            })}
        </div>
    )
}

export default Items