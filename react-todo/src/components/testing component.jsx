import React, { useState } from "react";

const testing component = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Testing Component</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  );
};

export default testing component;
