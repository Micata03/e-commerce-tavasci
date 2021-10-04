import React from 'react';
import { useState } from 'react';



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
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={cant === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{cant}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={cant === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => onAdd(cant)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;