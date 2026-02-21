import { useState, useEffect } from "react";

function Task8() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>8. Timer</h2>
      <p>{seconds} seconds</p>
    </div>
  );
}

export default Task8;
