import { useState } from "react";

function Task7() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>7. Show/Hide Profile</h2>
      <button onClick={() => setShow(!show)}>Toggle Profile</button>

      {show && (
        <div>
          <h3>Suba</h3>
          <p>Frontend Developer</p>
        </div>
      )}
    </div>
  );
}

export default Task7;
