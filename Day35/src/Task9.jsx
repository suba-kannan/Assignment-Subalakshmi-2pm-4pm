import { useState } from "react";

function Task9() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(name);
  };

  return (
    <div>
      <h2>9. Show Data on Submit</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{submitted}</p>
    </div>
  );
}

export default Task9;
