import { useState } from "react";

function Task10() {
  const [show, setShow] = useState(true);
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h2>10. Toggle List</h2>
      <button onClick={() => setShow(!show)}>Toggle List</button>

      {show && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task10;
