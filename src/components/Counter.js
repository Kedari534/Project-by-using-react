// Counter.js
import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const bgColor = `rgba(0, 0, 255, ${count * 0.1})`;

  return (
    <div className="counter-container" style={{ backgroundColor: bgColor }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;