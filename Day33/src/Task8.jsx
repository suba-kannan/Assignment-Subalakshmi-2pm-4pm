import { useState } from "react";

function Task8() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>8. Input Preview</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h3>Preview: {text}</h3>
    </div>
  );
}

export default Task8;
