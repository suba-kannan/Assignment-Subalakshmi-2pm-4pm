import { useState } from "react";

function Task4() {
  const [btnText, setBtnText] = useState("Click Me");

  return (
    <div>
      <h2>4. Change Button Text</h2>
      <button onClick={() => setBtnText("Clicked!")}>{btnText}</button>
    </div>
  );
}

export default Task4;
