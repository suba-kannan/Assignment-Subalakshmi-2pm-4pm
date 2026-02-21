import { useState } from "react";

function Task10() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>10. Multiple States</h2>

      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <input placeholder="Enter age" onChange={(e) => setAge(e.target.value)} />

      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Task10;
