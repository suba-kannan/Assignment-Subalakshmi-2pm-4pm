import { useState, useEffect } from "react";

function Task10() {
  const [count, setCount] = useState(0);

  // Infinite loop example
  useEffect(() => {
    if (count < 3) {
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div>
      <h2>10. Infinite Loop Example</h2>
      <p>{count}</p>
    </div>
  );
}

export default Task10;
