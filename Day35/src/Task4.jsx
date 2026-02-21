import { useState } from "react";

function Task4() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2>4. Checkbox State</h2>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "Checked" : "Unchecked"}</p>
    </div>
  );
}

export default Task4;
