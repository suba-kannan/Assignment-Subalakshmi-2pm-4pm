import { useState } from "react";

function Task1() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>1. Controlled Input</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>{name}</p>
    </div>
  );
}

export default Task1;
