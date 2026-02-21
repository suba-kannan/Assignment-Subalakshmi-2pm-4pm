import { useState } from "react";

function Task6() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>6. Click Counter</h2>
      <button onClick={() => setClicks(clicks + 1)}>
        Clicked {clicks} times
      </button>
    </div>
  );
}

export default Task6;
