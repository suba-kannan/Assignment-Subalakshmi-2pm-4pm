import { useEffect } from "react";
import "./App.css";

function App() {
  //task 7
  // Variable (task-9)
  const name = "Suba";
  const course = "React Development";

  // Change Page Title(task-10)
  useEffect(() => {
    document.title = "Suba React App";
  }, []);

  return (
    <div className="container">
      {/* Heading */}
      <h1>Welcome {name} </h1>

      {/* Paragraph (task 8) */}
      <p>I am learning {course}.</p>

      {/* Another JSX example */}
      <p>This is a simple React application created using Vite.</p>
    </div>
  );
}

export default App;
