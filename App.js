import React, { useState } from 'react';
import './App.css';

function App() {
  const [quantity1, setQuantity1] = useState(0);

  const handleClick1 = () => {
    setQuantity1(quantity1 + 1);
  };
  const [quantity2, setQuantity2] = useState(0);

  const handleClick2 = () => {
    setQuantity2(quantity2 + 1);
  };
  const [quantity3, setQuantity3] = useState(0);

  const handleClick3 = () => {
    setQuantity3(quantity3 + 1);
  };
  const [item, setItem] = useState('item');

  const handleClick4 = () => {
    setItem('grapes');
  };
  const [quantity4, setQuantity4] = useState(0);

  const handleClick5 = () => {
    setQuantity4(quantity4 + 1);
  };
  return (
    <div className="App">
      <h3>bananas</h3>
      <h3>{quantity1}</h3>
      <button onClick={handleClick1}>Add more</button>

      <h3>apples</h3>
      <h3>{quantity2}</h3>
      <button onClick={handleClick2}>Add more</button>

      <h3>oranges</h3>
      <h3>{quantity3}</h3>
      <button onClick={handleClick3}>Add more</button>

      <h3>{item}</h3>
      <button onClick={handleClick4}>Different item</button>
      <h3>{quantity4}</h3>
      <button onClick={handleClick5}>Add more</button>
    </div>
  );
}
export default App;
