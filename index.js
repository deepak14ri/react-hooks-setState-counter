import React, { useState } from 'react';

import reactDOM from 'react-dom';
import css from './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
// const root = <Hooks />;
const root = <Counter />;
const el = document.getElementById('root');

reactDOM.render(root, el);
