import React from 'react';
export default function Product({ onAdd, product }) {
  return (
    <div className='itemclass'>
      <div>
        <img className='small' src={product.image} alt={product.title} />
      </div>
      <div className='ordername'>
        <h3>{product.name}</h3>
        <h2>{product.title}</h2>
        <div>{product.price} $</div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
