import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReduce = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        border: "1px solid tomato",
        margin: "2px",
        borderRadius: "15px",
      }}
    >
      <h2>Counter: {count} </h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
