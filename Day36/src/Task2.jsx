import { useState, useEffect } from "react";

function Task2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>2. Runs on State Change</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>{count}</p>
    </div>
  );
}

export default Task2;
