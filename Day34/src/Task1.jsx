import { useState } from "react";

function Task1() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h2>1. Login Status</h2>
      <button onClick={() => setLoggedIn(!loggedIn)}>Toggle Login</button>
      <p>{loggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
}

export default Task1;
