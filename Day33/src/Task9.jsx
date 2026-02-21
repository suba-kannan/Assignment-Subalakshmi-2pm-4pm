import { useState } from "react";

function Task9() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <h2>9. Light/Dark Toggle</h2>
      <button onClick={() => setDark(!dark)}>Toggle Mode</button>
      <p
        style={{
          color: dark ? "white" : "black",
          background: dark ? "black" : "white",
        }}
      >
        This is some text
      </p>
    </div>
  );
}

export default Task9;
