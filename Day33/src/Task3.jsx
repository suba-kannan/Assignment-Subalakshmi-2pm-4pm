import { useState } from "react";

function Task3() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>3. Live Input</h2>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>You typed: {value}</p>
    </div>
  );
}

export default Task3;
