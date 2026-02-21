import { useState, useEffect } from "react";

function Task4() {
  const [count, setCount] = useState(0);

  // Mistake: Missing dependency
  useEffect(() => {
    console.log("Count is:", count);
  }, []); // should include [count]

  return (
    <div>
      <h2>4. Dependency Mistake</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>{count}</p>
    </div>
  );
}

export default Task4;
