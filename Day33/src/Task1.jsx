import { useState } from "react";

function Task1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>1. Counter</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Task1;
