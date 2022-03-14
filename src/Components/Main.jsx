import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { data, onAdd } = props;
  return (
    <main>
      <h2>Art Items</h2>
      <div className='productdesc'>
        {data.map(product => {
          return <Product key={product.id} product={product} onAdd={onAdd} />;
        })}
      </div>
    </main>
  );
}

// products poxel data-ov
// div classname ="container"
// main classname ='main'
