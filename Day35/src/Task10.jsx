import { useState } from "react";

function Task10() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + name);
    setName("");
  };

  return (
    <div>
      <h2>10. Clear After Submit</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task10;