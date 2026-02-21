import { useState } from "react";

function Task2() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <h2>2. Toggle Text</h2>
      <button onClick={() => setText(text === "Hello" ? "Welcome" : "Hello")}>
        {text}
      </button>
    </div>
  );
}

export default Task2;
