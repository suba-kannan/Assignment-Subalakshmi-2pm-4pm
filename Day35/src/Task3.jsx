import { useState } from "react";

function Task3() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div>
      <h2>3. Prevent Reload</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task3;
