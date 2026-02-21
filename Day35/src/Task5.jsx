import { useState } from "react";

function Task5() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>5. Reset Form</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("")}>Reset</button>
    </div>
  );
}

export default Task5;
