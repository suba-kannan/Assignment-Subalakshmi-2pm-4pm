import { useState } from "react";

function Task8() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid Email");
    } else {
      setError("Valid Email");
    }
  };

  return (
    <div>
      <h2>8. Validation</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Task8;
