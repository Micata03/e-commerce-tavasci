import React from 'react';
import { useState } from 'react';
import './ItemCount.css'



const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [cant, setCant] = useState(initial);

  const addProduct = (num) => {
    setCant(cant + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="btn"
          onClick={() => addProduct(-1)}
          disabled={cant === initial ? true : null}
        >
          -
        </button>
        <span className=" btn">{cant}</span>
        <button
          className=" btn"
          onClick={() => addProduct(+1)}
          disabled={cant === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="btn"
        onClick={() => onAdd(cant)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;