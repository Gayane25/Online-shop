import Basket from './Components/Basket';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('data');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = fetch('https://harvardartmuseums.org/browse')
      .then(response => response.json())
      .then(data =>
        setData(
          data.records.map(
            ({ id, signed, title, totaluniquepageviews, images, image }) => {
              return {
                id,
                name: signed,
                title,
                price: totaluniquepageviews * 1,
                image: images[0].baseimageurl,
              };
            }
          )
        )
      );
  }, []);
  console.log(data);
  const opening = () => {
    setIsOpen(true);
  };
  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const itemsPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className='App'>
      <Header opening={opening} />
      <div className='window' onClick={() => setIsOpen(false)}>
        <Main onAdd={onAdd} data={data} />
        <Basket
          opening={opening}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          itemsPrice={itemsPrice}
        />
      </div>
    </div>
  );
}

export default App;
