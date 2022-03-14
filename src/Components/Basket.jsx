import React, { useEffect } from 'react';

export default function Basket(props) {
  const { itemsPrice, cartItems, onAdd, onRemove, isOpen, setIsOpen } = props;
  return (
    <>
      {isOpen && (
        <>
          <div className='onOpenContainer'></div>
          <div className='bag' onClick={event => event.stopPropagation()}>
            <h2>Bag Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map(item => {
              return (
                <div key={item.id} className='row'>
                  <div className='basketItem'>
                    <img className='basketImg' src={item.image} />
                    <div className='column'>
                      <div>{item.name}</div>
                      <div>{item.title}</div>
                      <div>{item.price}</div>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => onAdd(item)} className='add'>
                      +
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => onRemove(item)} className='remove'>
                      -
                    </button>
                  </div>
                </div>
              );
            })}
            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div>
                  <div>Items total price</div>
                  <div>{itemsPrice.toFixed(2)}</div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
