import { useState } from "react";

function Task5() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>5. Counter with Reset</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Task5;
